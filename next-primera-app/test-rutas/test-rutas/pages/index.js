import Head from "next/head";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <h1>Index Page</h1>
        <a href="/contact">Contact</a>

        <Link href="/contact">
          <p>Contact Next</p>
        </Link>
      </div>
    </>
  );
}
