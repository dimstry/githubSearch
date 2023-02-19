import { type } from "os";
import { User } from "./user";

export type SearchRes = {
  users: User[];
  search: string;
};
