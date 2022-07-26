import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { useSession, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700 mb-4">
          Kontent Management System
        </h1>
        {session ? (
          <div>
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <button
              onClick={() => signOut()}
              className={"p-2 bg-gray-700 text-white uppercase mt-4"}
            >
              Signout
            </button>
          </div>
        ) : (
          <button className="p-2 bg-green-700 text-white uppercase">
            <Link href={"/api/auth/signin?csrf=true"}>Signin</Link>
          </button>
        )}
      </main>
    </>
  );
};

export default Home;
