import { auth } from "../lib/auth";
import Links from "./links/Links";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="flex justify-between py-8 gap-6 items-center">
      <div className="font-bold text-3xl">Lama</div>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
