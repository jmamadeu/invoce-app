import React from "react";
import { PageWrapperType } from "../layouts.types";
import { SEO } from "@/components/seo";

export const PageWrapper = ({
  pageTitle,
  className,
  children
}: PageWrapperType) => (
  <main className={className}>
    <SEO pageTitle={pageTitle} />
    {children}
  </main>
);
