import Navbar from "../components/Navbar/Navbar";
import HomePage from "../components/HomePage/HomePage";


export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col justify-between py-10 px-16 bg-white dark:bg-black ">
        <div className="flex flex-col gap-6 items-start">
          <Navbar />
          <HomePage />
        </div>
      </main>
    </div>
  );
}
