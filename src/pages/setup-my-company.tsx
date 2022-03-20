import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { FormInput } from "@/components/ui";
import { PageWrapper } from "@/components/layouts/page-wrapper";

const SetupMyCompany: NextPage = () => {
  return (
    <PageWrapper pageTitle="Setup my company">
      <main className="bg-darkPurple-100 h-screen flex">
        <div className="container mx-auto flex justify-center items-center">
          <form className="bg-gray-10  rounded-xl p-4 py-12 gap">
            <h3 className="text-gray-200 font-headline mb-4 text-2xl text-center">
              Setup company details
            </h3>
            <div className="flex gap-4 flex-col">
              <FormInput
                name="name"
                type="text"
                placeholder="Toptal"
                label="Insert your company's name"
              />
              <FormInput
                name="address"
                type="text"
                placeholder="San Francisco"
                label="Company's address"
              />

              <div className="flex gap-4 flex-row">
                <FormInput
                  name="vatNumber"
                  type="text"
                  placeholder="1223"
                  label="Insert your vat number"
                />
                <FormInput
                  name="regNumber"
                  type="text"
                  placeholder="1223"
                  label="Insert your reg number"
                />
              </div>
              <div className="flex gap-4 flex-row">
                <FormInput
                  name="iban"
                  type="text"
                  placeholder="BE32432934893"
                  label="Insert your Iban"
                />
                <FormInput
                  name="swift"
                  type="text"
                  placeholder="TOP123"
                  label="Insert your Swift"
                />
              </div>
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
    </PageWrapper>
  );
};

export default SetupMyCompany;
