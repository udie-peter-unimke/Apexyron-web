import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Apexyron from "@/public/apex.png";
const footerLinks = {
  Company: [
    { name: "About Us", href: "#" },
    { name: "Our Process", href: "#" },
    { name: "Tech Stack", href: "#" },
  ],
  Products: [
    { name: "RingTask", href: "#" },
  ],
  Social: [
    { name: "Twitter", href: "#", icon: null },
    { name: "GitHub", href: "#", icon: null },
    { name: "LinkedIn", href: "#", icon: null },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Image 
              src={Apexyron} 
              alt="Apexyron Logo" 
              width={140} 
              height={35} 
            />
            <p className="text-gray-500 text-sm leading-relaxed">
              Iterate. Innovate. Impact.<br />
              Building digital foundations for the next generation of productivity.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-gray-900 mb-6">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-500 hover:text-blue-600 text-sm flex items-center group transition-colors"
                    >
                      {link.name}
                      {category !== "Social" && (
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {currentYear} Apexyron LTD. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-gray-600 text-xs transition">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600 text-xs transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}