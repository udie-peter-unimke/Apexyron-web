import { 
  Cpu, 
  Layers, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  BarChart3 
} from "lucide-react";

const services = [
  {
    title: "App Development",
    description: "Building high-performance mobile and web applications tailored to your business needs.",
    icon: Smartphone,
  },
  {
    title: "System Architecture",
    description: "Designing scalable, robust backends and cloud infrastructures that grow with you.",
    icon: Layers,
  },
  {
    title: "AI Integration",
    description: "Implementing smart automation and machine learning to optimize your daily workflows.",
    icon: Cpu,
  },
  {
    title: "Performance Optimization",
    description: "Refining codebases and databases to ensure lightning-fast load times and smooth UX.",
    icon: Zap,
  },
  {
    title: "Security First",
    description: "Hardening your digital assets with industry-standard encryption and security protocols.",
    icon: ShieldCheck,
  },
  {
    title: "Data Analytics",
    description: "Turning raw data into actionable insights through custom dashboards and monitoring.",
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Building Digital Foundations for <span className="text-blue-600">Impact.</span>
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          We combine engineering precision with creative design to deliver products that matter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Optional "Ready to optimize" CTA bar from the UI */}
      <div className="mt-20 p-10 rounded-3xl bg-linear-to-r from-blue-50 to-purple-50 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/50">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Ready to optimize your software?</h3>
          <p className="text-gray-600">Let&apos;s build something impactful together.</p>
        </div>
        <button className="whitespace-nowrap bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition">
          Book a Call
        </button>
      </div>
    </section>
  );
}