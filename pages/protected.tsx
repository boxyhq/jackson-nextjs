import type { NextPage } from "next";
import Link from "next/link";
import Container from "../components/Container";

const Protected: NextPage = () => {
  return (
    <Container title="Protected">
      <div className="space-y-4">
        <h2 className="text-2xl">Access Denied</h2>
        <p>
          <Link href="/login">
            <a className="underline underline-offset-4">You must be signed in to view this page</a>
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Protected;
