import { GetServerSideProps, GetServerSidePropsResult } from "next";

export function withAuth<P>(fn: GetServerSideProps<P>): GetServerSideProps {
  return async (context): Promise<GetServerSidePropsResult<P>> => {
    return await fn(context);
  };
}
