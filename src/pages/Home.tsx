import About from "./../components/About"
import Blogs from "./../components/Blogs"
import Events from "./../components/Events"
import Hero from "./../components/Hero"
import Promo from "./../components/Promo"
import Speakers from "./../components/Speakers"
import Sponsors from "./../components/Sponsors"
import Team from "./../components/Team"

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Events />
            <Speakers />
            <Promo />
            <Team />
            <Blogs />
            <Sponsors />
        </>
    )
}
