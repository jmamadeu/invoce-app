import React from "react";

import type { GetServerSideProps, NextPage } from "next";

import { useRouter } from "next/router";
import { Header } from "@/components/layouts/header";
import { PageWrapper } from "@/components/layouts/page-wrapper";
import { DashboardClientsTable } from "@/views/dashboard/components/table";
import { SectionTableHeader } from "@/views/dashboard/components/section-table-header";
import { withAuth } from "@/guards/with-ssr-auth";

const Home: NextPage = () => {
  const { push: navigateToRoute } = useRouter();

  const handleClickCreateEntity = (entity: string) => {
    navigateToRoute(entity);
  };

  return (
    <PageWrapper pageTitle="Dashboard">
      <main className="bg-darkPurple-100 h-screen">
        <Header />
        <section className="container mx-auto text-white mt-4">
          <div className="grid grid-cols-2 gap-8">
            <aside>
              <SectionTableHeader
                label="Clients"
                onButtonClick={() => handleClickCreateEntity("/clients/save")}
                title="button to add new client"
              />
              <div className="mt-8">
                <DashboardClientsTable />
              </div>
            </aside>
            <aside>
              <SectionTableHeader
                label="Invoices"
                onButtonClick={() => handleClickCreateEntity("/invoices/save")}
                title="button to add new invoice"
              />
            </aside>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {}
  };
});
