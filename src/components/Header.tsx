import { FiBook } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import Switch from "./Switch";
export default function Header() {
  return (
    <header className=" h-32 text-lg text-[#979797] flex justify-around align-middle items-center">
      <div>
        <FiBook size={42} />
      </div>
      <div className="flex">
        <Switch />
        <FiMoon className="mt-1" size={32} />
      </div>
    </header>
  );
}
