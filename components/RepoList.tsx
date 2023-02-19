import {
  ArrowPathIcon,
  GlobeAsiaAustraliaIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { Repos } from "@/types/Repos";
import fetcher from "@/utils/fetcher";
import Loading from "./Loading";

export default function RepoList({ reposUrl }: Props) {
  const { data, error, mutate } = useSWR<Repos[]>(reposUrl, fetcher, {
    refreshInterval: 1000,
  });

  const isLoading = !data && !error;

  const onRefresh = () => {
    mutate();
  };

  if (isLoading) {
    return <Loading />;
  }

  console.log(data);

  return (
    <div className="mt-10 space-y-5">
      <p className="inline-flex items-center space-x-3">
        <GlobeAsiaAustraliaIcon className="w-6 h-6" />
        <span className="text-2xl font-bold">List Repository</span>{" "}
        <button
          onClick={() => onRefresh()}
          className="border p-3 hover:bg-zinc-100"
        >
          <ArrowPathIcon className="w-4 h-4" />
        </button>
      </p>
      <div className="border max-h-80 overflow-auto width-scroll-bar-0">
        {data?.map((repo, index) => (
          <div key={index} className="flex flex-col p-5 border-b">
            <Link href={repo.html_url} className="text-xl font-bold">
              {repo.name}
            </Link>
            <p className="text-sm truncate ">{repo.description}</p>
            <div className="mt-2">
              <span className="text-sm bg-zinc-100 px-3 py-1 ">
                {repo.language ? repo.language : "No Language"}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* btn back */}
      <div className="flex justify-center">
        <Link href="/">
          <button className="border p-3 hover:bg-zinc-100">
            <ArrowUturnLeftIcon className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );
}

interface Props {
  reposUrl?: string;
}