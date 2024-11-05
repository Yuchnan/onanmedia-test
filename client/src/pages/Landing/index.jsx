import DefaultLayout from "@layouts/DefaultLayout"
import NewsContainer from "@layouts/NewsContainer"
import Jumbotron from "@mods/LandingPage/Jumbotron"
import CategoryBar from "@mods/LandingPage/CategoryBar"
import Footer from "@mods/LandingPage/Footer"
import CrudModal from "@/components/modules/LandingPage/CrudModal"
import SectionTrending from "@/components/modules/LandingPage/SectionContent/SectionTrending"
import SectionRecent from "@/components/modules/LandingPage/SectionContent/SectionRecent"

function Landing() {
    return (
        <div>
            <DefaultLayout>
                <Jumbotron />
                <NewsContainer>
                    <CategoryBar />
                    <SectionTrending />
                    <SectionRecent />
                    <CrudModal />
                </NewsContainer>
                <Footer />
            </DefaultLayout>
        </div>
    )
}

export default Landing