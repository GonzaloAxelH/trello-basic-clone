export type EntryStatus = "pending" | "in-progress" | "finish";

export interface Entry {
  _id: string;
  description: string;
  createdAt: number;
  status: EntryStatus;
}
