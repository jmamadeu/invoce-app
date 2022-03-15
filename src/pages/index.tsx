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

      <main className="bg-darkPurple-100 h-screen">
        <header className="bg-gray-10 p-6 flex justify-between items-center text-gray-200">
          <div>
            <span className="font-headline text-2xl hover:text-white">
              Invoce App
            </span>
          </div>
          <div>
            <span className="border-2 p-2 rounded-full hover:text-white hover:border-white transition mr-8">
              JA
            </span>
            <button className="bg-danger-200 text-white text-base rounded-md py-3 px-12 hover:bg-danger-300 transition-all">
              Log out
            </button>
          </div>
        </header>
        <section className="container mx-auto text-white mt-4">
          <div className="grid grid-cols-2 gap-8">
            <aside>
              <div className="flex gap-4 items-center">
                <h2>Clients</h2>

                <button className="bg-gray-25 text-white hover:bg-gray-50 rounded-md py-1 text-xs px-3 transition-all">
                  Add new
                </button>
              </div>

              <div className="mt-8 border-gray-300 border-[1px] rounded-md">
                <div className="bg-gray-500 rounded-tl-md rounded-tr-md py-4 px-6 flex justify-between text-gray-50 text-sm font-normal">
                  <span className="">Name</span>
                  <span className="">Company</span>
                  <span className="">Tax</span>
                </div>
                <div>
                  <div className="py-4 px-6 flex justify-between bg-gray-300 border-t-[1px]">
                    <div className="flex flex-col text-xs">
                      <span className="text-darkPurple-100 font-bold">
                        João Amadeu
                      </span>
                      <span className="text-gray-200">
                        joao.amadeu@toptal.com
                      </span>
                    </div>
                    <div className="flex flex-col text-xs">
                      <span className="text-darkPurple-100">TopTal Inc</span>
                      <span className="text-gray-200">LA, United States</span>
                    </div>
                    <span className="text-darkPurple-100 text-xs">
                      2000 USD
                    </span>
                  </div>
                </div>
              </div>
            </aside>
            <aside>
              <div className="flex gap-4 items-center">
                <h2>Invoices</h2>

                <button className="bg-gray-25 text-white hover:bg-gray-50 rounded-md py-1 text-xs px-3 transition-all">
                  Add new
                </button>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
