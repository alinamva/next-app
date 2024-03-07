import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="flex justify-between py-8 gap-6 items-center">
      <div className="font-bold text-3xl">Lama</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
