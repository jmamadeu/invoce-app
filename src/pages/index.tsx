import React from "react";
import Head from "next/head";

import type { NextPage } from "next";

import { Header } from "@/components/layouts/header";
import { DashboardClientsTable } from "@/views/dashboard/components/table";
import { SectionTableHeader } from "@/views/dashboard/components/section-table-header";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Invoice App</title>
        <meta name="description" content="Invoice app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkPurple-100 h-screen">
        <Header />
        <section className="container mx-auto text-white mt-4">
          <div className="grid grid-cols-2 gap-8">
            <aside>
              <SectionTableHeader
                label="Clients"
                onButtonClick={() => console.log("")}
                title="button to add new client"
              />
              <div className="mt-8">
                <DashboardClientsTable />
              </div>
            </aside>
            <aside>
              <SectionTableHeader
                label="Invoices"
                onButtonClick={() => console.log("")}
                title="button to add new invoice"
              />
            </aside>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
