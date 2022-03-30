import Link from "next/link";

import { useUserAuth } from "@/contexts/use-user-auth";
import { breakNameIntoInitials } from "@/utils/breakNameIntoInitials";

export const Header = () => {
  const { signOut, user } = useUserAuth();

  return (
    <header className="bg-gray-10 p-6 flex justify-between items-center text-gray-200">
      <Link href="/">
        <a className="font-headline text-2xl hover:text-white">Invoice App</a>
      </Link>
      <div>
        <Link href="/setup-my-company">
          <a className="border-2 p-2 rounded-full hover:text-white hover:border-white transition mr-8">
            {breakNameIntoInitials(user?.name ?? "")}
          </a>
        </Link>
        <button
          type="button"
          title="logout from the invoice app"
          className="bg-danger-200 text-white text-base rounded-md py-3 px-12 hover:bg-danger-300 transition-all"
          onClick={signOut}
        >
          Log out
        </button>
      </div>
    </header>
  );
};
