'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const currentPath = usePathname();

  const linkClass = (path: string) => {
    const isActive =
      path === '/'
        ? currentPath === '/'
        : currentPath.startsWith(path);
  
    return `text-xl px-3 py-1 rounded transition duration-200 ${
      isActive
        ? 'bg-zinc-900 text-gray-500 font-bold'
        : 'text-white hover:text-blue-400 underline underline-offset-4'
    }`;
  };
  
  

  return (
    <div className="flex justify-between items-center mb-5 px-10 bg-zinc-900 h-20">
      <div className="basis-64 text-left p-1">
        <p className="text-3xl">SafeSubstance</p>
      </div>
      <div className="flex gap-x-5">
        <Link href="/" className={linkClass('/')}>Home</Link>
        <Link href="/near" className={linkClass('/near')}>Near You</Link>
        <Link href="/learn" className={linkClass('/learn')}>Learn</Link>
        <Link href="/about" className={linkClass('/about')}>About</Link>
      </div>
    </div>
  );
}
