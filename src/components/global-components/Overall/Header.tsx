"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 bg-white">
      <Link href={'/'} className="flex items-center gap-2">
        <p className="text-lg font-bold">Spicederiv.com</p>
      </Link>
      <div className="flex items-center gap-4">
        <Link href={`https://oauth.deriv.com/oauth2/authorize?app_id=${process.env.APP_ID}`} className="log-in-button">
          Log in
        </Link>
        <Link href="/signup" className="sign-up-button">
          Sign up
        </Link>
      </div>
    </header>
  );
}
