import CrewContainer from "../../components/crewContainer"
import Header from "../../components/header"
import Title from "../../components/title"

const Crew = () => {
  return (
    <div className=" min-h-screen bg-center bg-no-repeat  bg-cover  " id="crew_screen_container">
      <Header />
      <Title number="02" text="Meet Your Crew" />
      <CrewContainer />
    </div>
  )
}

export default Crew