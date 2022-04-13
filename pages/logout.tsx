import type { NextPage } from "next";
import { useEffect } from "react";

const Logout: NextPage = () => {
  async function logOut() {
    // Handle logOut
  }

  useEffect(() => {
    logOut();
  }, []);

  return <p>Logging out...</p>;
};

export default Logout;
