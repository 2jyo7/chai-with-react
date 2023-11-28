export default function Home() {
  return (
    <div className="">
      <p
        className="flex flex-col justify-center 
         bg-slate-200 m-10 p-10 items-center
       font-bold text-red-500 hover:text-red-600
       text-4xl"
      >
        Hello there!
      </p>
      <h3
        className="flex flex-col justify-center 
         bg-slate-200 m-5 p-6 items-center
       font-bold text-red-500 hover:text-red-600
       text-4xl"
      >
        Nice to meet you
      </h3>
      <button
        className="border border-gray-400 bg-red-950
       text-black m-5 p-2 font-bold"
      >
        Click me Love
      </button>
    </div>
  );
}
