import Image from "next/image";
import Link from "next/link";
import Apexyron from "@/public/apex.png";

const gmailUrl =
           
  "https://mail.google.com/mail/?view=cm&to=unimkepeter3@gmail.com&su=Hire%20/%20Consult%20Inquiry";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <Image
            src={Apexyron}
            alt="Apexyron Logo"
            width={40}
            height={40}
            priority
          />
        </Link>

        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <Link href="#services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="#products" className="hover:text-blue-600 transition">Products</Link>
          <Link href="#team" className="hover:text-blue-600 transition">Team</Link>
          <a
  href={gmailUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
>
  Hire / Consult
</a>
        </div>
      </div>
    </nav>
  );
}