import { getSession } from "next-auth/react";
import { ROUTES } from "../config/constants";

import type { GetServerSideProps } from "next";
import type { ComponentType } from "react";

export const withAuth: WithAuth = (Component) => {
  return {
    Component,
    getServerSideProps: async (context) => {
      const session = await getSession(context);

      if (!session) {
        return {
          redirect: {
            destination: ROUTES.auth_redirect,
            permanent: false,
          },
        };
      }

      return {
        props: {
          session,
          hello: "world",
        },
      };
    },
  };
};

export type WithAuth = (Component: ComponentType) => {
  Component: ComponentType;
  getServerSideProps: GetServerSideProps;
};
