import { hometeam } from "@/data/team";
import { Link } from "react-router";
import { MemberCard } from "./MemberCard";

export default function Team() {
  return (
    <>
      <section id="team" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Team</h2>
          <div className="overflow-x-auto relative">
            <div id="speakersContainer" className="flex space-x-6 pb-8 transition-transform duration-300">
              {hometeam.map((speaker, index) => (
                <MemberCard key={index} name={speaker.name} title={speaker.title} image={speaker.image} />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link to={"/team"}
            className="bg-[#E50914] text-white px-8 py-3 !rounded-button hover:bg-[#E50914]/90 transition-colors whitespace-nowrap">
            Meet Full Team
          </Link>
        </div>

      </section>
    </>
  )
}
