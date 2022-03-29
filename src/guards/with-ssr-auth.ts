import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from "next";
import { parseCookies } from "nookies";
import { UserDataToPersistType } from "@/models/user/types";

export function withAuth<T>(fn: GetServerSideProps<T>): GetServerSideTrops {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<T>> => {
    const cookies = parseCookies(context);

    if (!cookies["@invoice_app:user_login"]) {
      return {
        redirect: {
          destination: "/sign-in",
          permanent: false
        }
      };
    }

    const userFromCookies: UserDataToPersistType = JSON.parse(
      cookies["@invoice_app:user_login"]
    );

    if (
      !userFromCookies.companyDetails &&
      "/setup-my-company" !== context.resolvedUrl
    ) {
      return {
        redirect: {
          destination: "/setup-my-company",
          permanent: false
        }
      };
    }

    return await fn(context);
  };
}
