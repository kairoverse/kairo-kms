import clsx from "clsx";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import { GetServerSideProps, NextPage } from "next";
import { BuiltInProviderType } from "next-auth/providers";

interface SigninPageProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};

const SignInPage: NextPage<SigninPageProps> = ({ providers }) => {
  return (
    <div className={clsx(["max-w-5xl mx-auto"])}>
      <div className={clsx(["mt-12 mb-4"])} />
      <h3 className={clsx(["text-5xl font-bold text-gray-700"])}>Signin</h3>

      {Object.values(providers || {}).map((provider) => (
        <div
          key={provider.name}
          className={clsx(["p-4 rounded-lg bg-slate-200 max-w-md my-4"])}
        >
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SignInPage;
