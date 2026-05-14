import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import RingTaskLogo from "@/public/rt_final_icon.png.jpg";
import Ring from "@/public/ring.png";
const features = [
  "Virtual call reminders",
  "Focus mode integration",
  "Seamless Firebase sync",
  "Intuitive gesture controls",
];

export default function ProductShowcase() {
  return (
    <section className="py-24 px-6 bg-[#0B0F1A] text-white rounded-[3rem] mx-4 md:mx-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
            Featured Product
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Meet <span className="text-purple-500">RingTask</span>
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed">
            The next generation of productivity. RingTask replaces standard, 
            easy-to-ignore notifications with virtual call reminders that 
            ensure you never miss a critical task again.
          </p>

          <ul className="space-y-4">
            {features.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-purple-500" />
                {item}
              </li>
            ))}
          </ul>

          <div className="pt-4 flex flex-wrap gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-xl font-bold transition">
              View Waitlist
            </button>
          </div>
        </div>

        {/* Right Side: App Mockups */}
        <div className="relative flex justify-center items-center">
          {/* Decorative Purple Glow */}
          <div className="absolute w-72 h-72 bg-purple-600/20 blur-[100px] rounded-full" />
          
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src={RingTaskLogo} 
                  alt="RingTask UI 1" 
                  width={280} 
                  height={500} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src={Ring}
                  alt="RingTask UI 2" 
                  width={280} 
                  height={500} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}