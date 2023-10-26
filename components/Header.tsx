import { UserButton } from "@clerk/nextjs";
import Logo from "./Logo";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-3 py-5 bg-slate-700 shadow-sm bg-opacity-10">
      <Logo />
      <div className="flex justify-center items-center gap-x-3 lg:gap-x-5">
        <Button />
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
};

export default Header;
