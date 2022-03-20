import Head from "next/head";
import { SEOType } from "./seo.types";

export const SEO = ({ pageTitle }: SEOType) => (
  <Head>
    <title>Invoice App | {pageTitle}</title>
    <meta name="description" content="Invoice app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);
