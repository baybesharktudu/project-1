import { Activity, User } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="text-2xl flex gap-2 items-center">
        <Activity className="text-[var(--main-color)]" />
        <h1 className="leading-none">F16s</h1>
      </div>
      <User />
    </div>
  );
}
