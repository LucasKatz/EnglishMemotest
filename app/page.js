"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    label: 'Animals',
    href: '/animals',
  },
  {
    label: 'Parts of the House',
    href: '/house',
  },
  {
    label: 'Feelings',
    href: '/feelings',
  },
  {
    label: 'Irregular Verbs',
    href: '/verbs',
  },
  {
    label: 'Colours',
    href: '/colours',
  },
  {
    label: 'Comparative and Superlatives',
    href: '/comparisons',
  },
];

const Home = () => {
  const pathname = usePathname();

  return (
    <div className='h-screen m-auto bg-white f'>
      <section className='bg-green flex flex-row justify-center align-middle h-screen'>
    <div className="flex flex-row m-auto">
      {links.map(link => (
        <Link key={link.label} href={link.href}>
          <p className={`${pathname === link.href ? "font-extrabold font-lobster" : ""} m-2 p-2 h-12 max-w bg-red-500 text-white text-center`}>
            {link.label}
          </p>
        </Link>
      ))}
    </div>
    </section>
    </div>
  );
};

export default Home;
