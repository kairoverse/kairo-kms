import { withAuth } from "../../hoc/withAuth";
import type { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";

const AdminPage = withAuth((props: any) => {
  const session = useSession();
  return (
    <div>
      This should only be visible to loggedin user
      <pre>{session ? JSON.stringify(session, null, 2) : "no-session"}</pre>
      <div className="border-2 h-4" />
      <pre>{JSON.stringify(props.hello, null, 2)}</pre>
    </div>
  );
});

export const getServerSideProps: GetServerSideProps = async (context) => {
  return AdminPage.getServerSideProps(context);
};

export default AdminPage.Component;
