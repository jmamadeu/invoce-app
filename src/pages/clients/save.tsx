import React from "react";

import type { GetServerSideProps, NextPage } from "next";

import { Header } from "@/components/layouts/header";
import { PageWrapper } from "@/components/layouts/page-wrapper";

import { withAuth } from "@/guards/with-ssr-auth";

import { SaveClient } from "@/views/clients/components/save-client";

const SaveClients: NextPage = () => {
  return (
    <PageWrapper pageTitle="Save Client">
      <main className="bg-darkPurple-100 h-screen">
        <Header />
        <section className="container mx-auto text-white mt-4">
          <div className="grid grid-cols-2 gap-8">
            <SaveClient />
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default SaveClients;

export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {}
  };
});
