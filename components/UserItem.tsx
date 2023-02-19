import { User } from "@/types/user";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import Image from "next/image";
import Link from "next/link";

interface UserItemProps {
  user: User;
}

export default function UserItem({ user }: UserItemProps) {
  return (
    <div className="flex justify-between items-center min-w-full hover:bg-zinc-200 px-5 py-2">
      <div className="flex gap-2 items-center">
        <Image
          alt="profile"
          width={40}
          height={40}
          src={user?.avatar_url}
          className="rounded-full"
        />
        <p>{user?.login}</p>
      </div>
      <Link
        href={`/detail/${user.login}`}
        className="cursor-pointer hover:bg-black hover:text-white p-3 transition duration-300 ease-in-out rounded"
      >
        <ChevronRightIcon className="w-4 h-4" />
      </Link>
    </div>
  );
}
