import CrewContainer from "../../components/crewContainer"
import Header from "../../components/header"
import Title from "../../components/title"
import '../../styles/crew_screen.css'

const Crew = () => {
  return (
    <div className=" h-screen overflow-hidden bg-center bg-no-repeat  bg-cover " id="crew_screen_container">
      <Header />
      <Title number="02" text="Meet Your Crew" />
      <CrewContainer />
    </div>
  )
}

export default Crew