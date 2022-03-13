import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Invoce App - Sign In</title>
        <meta name="description" content="Invoce app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkPurple-100 h-screen flex">
        <div className="container mx-auto flex justify-center items-center">
          <form className="bg-gray-10 w-[21.25rem] rounded-xl p-4 py-12 gap">
            <div className="flex gap-4 flex-col">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="username"
                  className="text-gray-200 text-xs font-normal"
                >
                  Insert your work e-mail
                </label>
                <input
                  className="bg-gray-25 py-3 pl-3 rounded-md placeholder:text-gray-50 placeholder:text-sm text-gray-200 text-sm"
                  id="username"
                  type="email"
                  placeholder="jmamadeu@toptal.com"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="text-gray-200 text-xs font-normal"
                >
                  Insert your password
                </label>
                <input
                  id="password"
                  type="password"
                  className="bg-gray-25 py-3 pl-3 rounded-md placeholder:text-gray-50 placeholder:text-sm text-gray-200 text-sm"
                  placeholder="******"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 mt-8">
              <button
                title="sign in"
                className="bg-purple-100 text-white text-base py-3 rounded-md"
              >
                Sign In
              </button>

              <div className="flex flex-col items-center gap-2">
                <Link href="/forgot-password">
                  <a className="text-gray-200 text-xs font-normal">
                    Forgot your password?
                  </a>
                </Link>

                <div className="bg-[#635F6B] h-[1px] w-full" />

                <Link href="/sign-up">
                  <a className="text-gray-200 text-xs font-normal">
                    Create an account
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
