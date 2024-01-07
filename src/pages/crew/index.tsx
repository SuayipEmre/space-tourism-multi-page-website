import CrewContainer from "../../components/crewContainer"
import Header from "../../components/header"

import  '../../styles/crew_screen.css'
const Crew = () => {
  return (
    <div className=" min-h-screen bg-center bg-no-repeat  bg-cover  " id="crew_screen_container">
      <Header />
      <CrewContainer />
    </div>
  )
}

export default Crew