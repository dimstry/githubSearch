import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import RepoList from "@/components/RepoList";
import { UserDetail } from "@/types/UserDatail";
import ProfileHeader from "@/components/HeaderProfile";

export default function Detail() {
  const router = useRouter();
  const { username } = router.query;

  const { data: user, error } = useSWR<UserDetail>(
    username && `https://api.github.com/users/${username}`,
    fetcher
  );

  return (
    <div className="py-10">
      <Head>
        <title>Detail {user?.name}</title>
      </Head>
      <div>
        <ProfileHeader user={user} />
        <RepoList reposUrl={user?.repos_url} />
      </div>
    </div>
  );
}
