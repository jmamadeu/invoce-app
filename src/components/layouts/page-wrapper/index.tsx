import React from "react";
import { PageWrapperType } from "../layouts.types";
import { SEO } from "@/components/seo";

export const PageWrapper = ({ pageTitle, children }: PageWrapperType) => (
  <React.Fragment>
    <SEO pageTitle={pageTitle} />
    {children}
  </React.Fragment>
);
