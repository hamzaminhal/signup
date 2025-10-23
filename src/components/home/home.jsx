export default function Home() {
  return (
    <>
      <div className="my-10">
        <a href="/login">
          <button className="my-10 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium py-2.5 shadow-lg shadow-indigo-200 hover:from-indigo-600 hover:to-pink-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 transition">
            Login
          </button>
        </a>
        <a href="/signup">
          <button className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium py-2.5 shadow-lg shadow-indigo-200 hover:from-indigo-600 hover:to-pink-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 transition">
            Sign Up
          </button>
        </a>
      </div>
    </>
  );
}
