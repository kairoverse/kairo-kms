import { withAuth } from "../../hoc/withAuth";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useSession } from "next-auth/react";

const AdminPage = (props: any) => {
  const session = useSession();
  return (
    <div>
      This should only be visible to loggedin user
      <pre>{session ? JSON.stringify(session, null, 2) : "no-session"}</pre>
      <div className="border-2 h-4" />
      <pre>{JSON.stringify(props.hello, null, 2)}</pre>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {
      hello: "world",
    },
  };
});

export default AdminPage;
