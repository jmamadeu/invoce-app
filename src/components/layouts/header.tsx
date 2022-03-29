import { useUserAuth } from "@/contexts/use-user-auth";
import { breakNameIntoInitials } from "@/utils/breakNameIntoInitials";

export const Header = () => {
  const { signOut, user } = useUserAuth();

  return (
    <header className="bg-gray-10 p-6 flex justify-between items-center text-gray-200">
      <div>
        <span className="font-headline text-2xl hover:text-white">
          Invoice App
        </span>
      </div>
      <div>
        <span className="border-2 p-2 rounded-full hover:text-white hover:border-white transition mr-8">
          {breakNameIntoInitials(user?.name ?? "")}
        </span>
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
