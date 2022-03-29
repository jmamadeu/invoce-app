import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { PageWrapper } from "@/components/layouts/page-wrapper";
import { SignUpForm } from "@/views/sign-up/components/sign-up-form";

const SignUp: NextPage = () => {
  return (
    <PageWrapper pageTitle="Sign Up">
      <main className="bg-darkPurple-100 h-screen flex">
        <div className="container mx-auto flex justify-center items-center">
          <div className="bg-gray-10 w-[21.25rem] rounded-xl p-4 py-12 gap">
            <h3 className="text-gray-200 font-headline mb-4 text-2xl text-center">
              Sign Up
            </h3>

            <SignUpForm />

            <div className="flex flex-col items-center">
              <Link href="/sign-in">
                <a className="text-gray-200 text-xs font-normal">
                  Already have an account?{" "}
                  <span className="underline">Sign In</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
};

export default SignUp;
