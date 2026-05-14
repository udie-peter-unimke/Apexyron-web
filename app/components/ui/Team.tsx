import Image, { StaticImageData } from "next/image";
import Ceo  from "@/public/CEO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const team = [
  {
    name: "Udie Peter Unimke",
    role: "Director & Lead Engineer",
    bio: "Specializing in Flutter and high-performance system architecture. Dedicated to building digital foundations that scale.",
    image: { Ceo } as {Ceo:  StaticImageData} , // Replace with your professional headshot
    socials: {
      github: "https://github.com/udie-peter-unimke",
      twitter: "https://x.com/PETERUNIMK9257",
      linkedin: "https://www.linkedin.com/in/peter-unimke-b69291359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
  },
  // Add future team members here
];

export default function Team() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Meet the <span className="text-blue-600">Architects</span>
        </h2>
        <p className="mt-4 text-gray-500">
          The minds iterating and innovating at Apexyron.
        </p>
      </div>

      <div className="flex justify-center">
        {team.map((member, index) => (
          <div 
            key={index} 
            className="w-full max-w-md p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 bg-blue-100 rounded-full scale-110 -z-10 blur-xl opacity-50" />
              <Image
                src={member.image.Ceo}
                alt={member.name}
                fill
                className="rounded-full object-cover border-4 border-white shadow-sm"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-blue-600 font-medium text-sm mb-4">{member.role}</p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              {member.bio}
            </p>

            <div className="flex justify-center gap-5">
              <a href={member.socials.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </a>
              <a href={member.socials.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href={member.socials.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}