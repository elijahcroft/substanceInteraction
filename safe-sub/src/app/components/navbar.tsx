'use client';
import Image from 'next/image';
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
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 bg-zinc-900 py-4 md:h-20 w-full">
      <div className="flex items-center gap-2 mb-2 md:mb-0">
        <p className="text-2xl md:text-3xl">SafeSubstance</p>
        <Image src="/pill.svg" alt="Logo" width={30} height={30} />
      </div>
  
      <div className="flex flex-col md:flex-row gap-2 md:gap-x-5">
        <Link href="/" className={`${linkClass('/')} text-base md:text-xl`}>Home</Link>
        <Link href="/learn" className={`${linkClass('/learn')} text-base md:text-xl`}>Learn</Link>
        <Link href="/about" className={`${linkClass('/about')} text-base md:text-xl`}>About</Link>
      </div>
    </div>
  );
}
