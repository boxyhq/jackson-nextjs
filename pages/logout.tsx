import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Logout: NextPage = () => {
  const router = useRouter();

  async function signOut() {
    // router.push("/login");
  }

  useEffect(() => {
    signOut();
  }, []);

  return <p>Logging out...</p>;
};

export default Logout;
