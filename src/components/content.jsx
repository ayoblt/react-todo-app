export default function Content({ children }) {
  return (
    <main className="container mx-auto w-5/6 relative sm:w-[28rem]">
      <div className="absolute -top-36 flex flex-col gap-4 w-full">
        {children}
      </div>
    </main>
  );
}
