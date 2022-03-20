import React from "react";
import Link from "next/link";
import Head from "next/head";

import type { NextPage } from "next";

import { FormInput } from "@/components/ui";

const SignIn: NextPage = () => {
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
            <h3 className="text-gray-200 font-headline mb-4 text-2xl text-center">
              Sign In
            </h3>
            <div className="flex gap-4 flex-col">
              <FormInput name="username" label="Insert you email" type="text" />

              <FormInput
                name="password"
                label="Insert you password"
                type="password"
              />
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

export default SignIn;
