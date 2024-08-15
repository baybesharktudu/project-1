
export default function ThemeProvider({ children }) {
  return (
    <div className="
        min-h-screen
        w-full
        bg-[var(--bg-color)]
        text-sm
        text-[var(--text-color)]
    ">
        <div className="container m-auto p-8 min-h-screen flex flex-col gap-4">{children}</div>
    </div>
  )
}
