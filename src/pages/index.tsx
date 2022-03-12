import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Invoce App</title>
        <meta name="description" content="Invoce app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-red-800 font-default">Invoce App</h1>
    </React.Fragment>
  );
};

export default Home;
