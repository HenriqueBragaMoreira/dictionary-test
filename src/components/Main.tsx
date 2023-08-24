import { BiSearch } from "react-icons/bi";
export default function Main() {
  return (
    <main className=" w-screen flex flex-row justify-center items-center">
      <div className="h-[29.313rem] w-[39.625rem]">
        <form action="">
          <input type="text" name="" id="" placeholder="Try anything now" required className="w-[39.625rem] h-16 p-5 bg-[var(--bg-theme)] rounded-lg text-black fixed"/>
          <span className="flex justify-end p-5">
            <button type="button" className="z-[1]">
              <BiSearch className="text-[#A745EC]" size={20} />
            </button>
          </span>
        </form>
      </div>
    </main>
  );
}
