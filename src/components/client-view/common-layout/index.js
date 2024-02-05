"use client";
import { usePathname } from "next/navigation";
import NavBar from "../navbar";
import { Sora } from "next/font/google";
import Header from "../header/header";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function CommonLayout({ children }) {
  const pathName = usePathname();

  return (
    <>
      {pathName !== "/admin" ? <Header /> : null}
      {pathName !== "/admin" ? <NavBar /> : null}
      <div className="">{children}</div>
    </>
  );
}
