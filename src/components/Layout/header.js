import Link from "next/link";
import { useEffect } from "react";

import { handleHover } from "@services/gsap";
import Container from "./container";

const LINKS = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "mailto:hello@iamgd.com",
    text: "Contact",
  },
];

export default function Header() {
  useEffect(() => {
    handleHover();
  }, []);

  return (
    <header className="pt-8 pb-4 mb-20">
      <Container className="flex items-center justify-between">
        <h1 className="text-4xl font-black leading-none uppercase text-primary">
          <Link href="/">
            <a className="flex md:flex-col">iamgd</a>
          </Link>
        </h1>

        <nav className="flex space-x-6 main-nav">
          {LINKS.map((link) => (
            <Link href={link.href} key={link.href}>
              <a className="relative self-end overflow-hidden text-lg nav">
                {link.text}
              </a>
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
