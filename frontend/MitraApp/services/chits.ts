import { db } from "./firebase";
import {
  addDoc, collection, serverTimestamp, setDoc, doc, getDoc, updateDoc,
} from "firebase/firestore";

export type Circle = {
  name: string;
  ownerUid: string;
  monthlyAmount: number;
  members: string[];   // array of user uids
  mode: "vote";        // no auction
  monthIndex: number;  // 0..n
};

export async function createCircle(data: Circle) {
  const ref = await addDoc(collection(db, "circles"), { ...data, createdAt: serverTimestamp() });
  return ref.id;
}

export async function recordContribution(args: { circleId: string; uid: string; amount: number; month: number; }) {
  await addDoc(collection(db, "contributions"), { ...args, at: serverTimestamp() });
}

export async function castVote(args: { circleId: string; month: number; voterUid: string; beneficiaryUid: string; }) {
  const id = `${args.circleId}_${args.month}_${args.voterUid}`;
  await setDoc(doc(db, "votes", id), { ...args, at: serverTimestamp() });
}

export async function saveSavingsSplit(args: { uid: string; total: number; splits: Record<string, number>; }) {
  await setDoc(doc(db, "savingsSplits", args.uid), { ...args, updatedAt: serverTimestamp() }, { merge: true });
}

export async function fetchSavingsSplit(uid: string) {
  const snap = await getDoc(doc(db, "savingsSplits", uid));
  return snap.exists() ? snap.data() as { total: number; splits: Record<string, number> } : null;
}

// naive tally (can be called by circle owner at month end)
export async function tallyVotes(args: { circleId: string; month: number; tally: Record<string, number> }) {
  // For hackathon demo you can compute tally client-side and write payout:
  await addDoc(collection(db, "payouts"), {
    circleId: args.circleId, month: args.month, tally: args.tally, at: serverTimestamp()
  });
  await updateDoc(doc(db, "circles", args.circleId), { monthIndex: args.month + 1 });
}
