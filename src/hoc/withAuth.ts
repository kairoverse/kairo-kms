import { getSession } from "next-auth/react";
import { ROUTES } from "../config/constants";

import type { GetServerSideProps, GetServerSidePropsContext } from "next";

export const withAuth = (getServerSideProps: GetServerSideProps) => {
  return async (context: GetServerSidePropsContext) => {
    const session = await getSession(context);
    if (!session) {
      return {
        redirect: {
          destination: ROUTES.auth_redirect,
          permanent: false,
        },
      };
    }

    return await getServerSideProps(context);
  };
};
