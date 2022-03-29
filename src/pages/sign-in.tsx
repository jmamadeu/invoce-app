import React from "react";
import Link from "next/link";

import type { NextPage } from "next";

import { PageWrapper } from "@/components/layouts/page-wrapper";
import { SignInForm } from "@/views/sign-in/components/sign-in-form";

const SignIn: NextPage = () => {
  return (
    <PageWrapper pageTitle="Sign In">
      <main className="bg-darkPurple-100 h-screen flex">
        <div className="container mx-auto flex justify-center items-center">
          <div className="bg-gray-10 w-[21.25rem] rounded-xl p-4 py-12 gap">
            <h3 className="text-gray-200 font-headline mb-4 text-2xl text-center">
              Sign In
            </h3>

            <SignInForm />

            <div className="flex flex-col items-center mt-4">
              <div className="bg-[#635F6B] h-[1px] w-full" />

              <Link href="/sign-up">
                <a className="text-gray-200 text-xs font-normal mt-4">
                  Create an account
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
};

export default SignIn;
