import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = { title: "CakeHouse — Made Fresh. Made Personal.", description: "Premium handcrafted cakes and custom cake experiences." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navbar/>{children}<footer className="mt-24 border-t border-black/5 py-10"><div className="container flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><div className="serif text-2xl font-bold">CakeHouse</div><p className="text-sm text-black/55">Made Fresh. Made Personal.</p></div><p className="text-sm text-black/45">© 2026 CakeHouse. Crafted with care.</p></div></footer></body></html>}
