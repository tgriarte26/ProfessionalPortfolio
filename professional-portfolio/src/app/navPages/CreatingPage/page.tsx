import Navbar from '@/components/Navbar/Navbar';
import styles from '@/app/navPages/CreatingPage/CreatingPage.module.css';

export default function CreatingPage() {
  return (
<div className="flex min-h-screen items-center justify-center bg-white text-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col justify-between py-10 px-16 bg-white">
        <div className="flex flex-col gap-6 items-start">
          <Navbar />
        </div>
      </main>
    </div>
  )
}