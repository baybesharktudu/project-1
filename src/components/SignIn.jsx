import { LogIn } from "lucide-react";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function SignIn() {
  return (
    <div className="w-full sm:w-72 flex flex-col gap-3 text-[var(--sub-color)]">
      <div className="flex items-end gap-2">
        <LogIn />
        <h1>login</h1>
      </div>
      <div className="flex justify-between items-center gap-3">
        <button className="hover:bg-[var(--text-color)] duration-300 hover:text-[var(--sub-alt-color)] w-full flex justify-center items-start gap-1 py-3 px-3 rounded-lg bg-[var(--sub-alt-color)]" type="button">
          <FaGoogle/>
        </button>
        <button className="hover:bg-[var(--text-color)] duration-300 hover:text-[var(--sub-alt-color)] w-full flex justify-center items-start gap-1 py-3 px-3 rounded-lg bg-[var(--sub-alt-color)]" type="button">
          <FaFacebook/>
        </button>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-1 rounded-lg w-full bg-[var(--sub-alt-color)]"></div>
        <span className="text-[var(--text-color)]">or</span>
        <div className="h-1 rounded-lg w-full bg-[var(--sub-alt-color)]"></div>
      </div>
      <form className="flex flex-col gap-3 text-[var(--text-color)]">
        <input
          className="w-full py-2 px-3 rounded-lg bg-[var(--sub-alt-color)] placeholder:text-[var(--sub-color)] focus:outline-none focus:outline-[var(--text-color)]"
          placeholder="email"
          type="email"
        />
        <input
          className="w-full py-2 px-3 rounded-lg bg-[var(--sub-alt-color)] placeholder:text-[var(--sub-color)] focus:outline-none focus:outline-[var(--text-color)]"
          placeholder="password"
          type="password"
        />
        <button className="hover:bg-[var(--text-color)] duration-300 hover:text-[var(--sub-alt-color)] bg-[var(--sub-alt-color)] w-full flex justify-center gap-1 py-2 px-3 rounded-lg">
          <LogIn className="w-4 h-4" />
          <span>sign in</span>
        </button>
      </form>
    </div>
  );
}
