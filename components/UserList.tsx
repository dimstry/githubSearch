/* eslint-disable @next/next/no-img-element */
import { SearchRes } from "@/types/SearchRes";
import UserItem from "./UserItem";

interface UserListProps {
  result?: SearchRes;
}
export default function UserList({ result }: UserListProps) {
  return (
    <div className="border rounded-lg w-full min-h-min space-y-3">
      <p className="text-center p-5">
        Hasil pencarian : <span className="font-bold">{result?.search}</span>
      </p>
      <div className="max-h-80 overflow-auto width-scroll-bar-0 flex flex-col gap-2">
        {result?.users.map((user, i) => (
          <UserItem key={i} user={user} />
        ))}
      </div>
    </div>
  );
}
