import { MemberCard } from '@/components/MemberCard';
import { team } from '@/data/team';

export default function TeamsPage() {
    return (
        <>
            <section className="py-28 bg-black">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Team</h2>
                    <div className="overflow-x-auto relative">
                        <div id="speakersContainer" className="grid grid-cols-2 md:grid-cols-4 space-x-6 pb-8 transition-transform duration-300">
                            {team.map((speaker, index) => (
                                <MemberCard key={index} name={speaker.name} title={speaker.title} image={speaker.image} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



