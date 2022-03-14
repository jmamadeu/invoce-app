import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FormInput } from "@/components/ui";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Invoce App - Sign Up</title>
        <meta name="description" content="Invoce app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkPurple-100 h-screen flex">
        <div className="container mx-auto flex justify-center items-center">
          <form className="bg-gray-10 w-[21.25rem] rounded-xl p-4 py-12 gap">
            <h3 className="text-gray-200 font-headline mb-4 text-2xl text-center">
              Sign Up
            </h3>
            <div className="flex gap-4 flex-col">
              <FormInput
                name="name"
                type="text"
                placeholder="João Amadeu"
                label="Insert your full name"
              />
              <FormInput
                name="username"
                type="email"
                placeholder="jmamadeu@toptal.com"
                label="Insert your work e-mail"
              />

              <FormInput
                name="password"
                type="password"
                placeholder="*******"
                label="Insert your password"
              />
              <FormInput
                name="confirm-password"
                type="password"
                placeholder="*******"
                label="Confirm your password"
              />
            </div>

            <div className="flex flex-col gap-8 mt-8">
              <button
                title="sign in"
                className="bg-purple-100 text-white text-base py-3 rounded-md"
              >
                Sign Up
              </button>

              <div className="flex flex-col items-center gap-2">
                <Link href="/sign-in">
                  <a className="text-gray-200 text-xs font-normal">
                    Already have an account?{" "}
                    <span className="underline">Sign In</span>
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
