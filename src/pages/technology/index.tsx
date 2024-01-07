import Header from "../../components/header"
import TechnologyContainer from "../../components/technologyContainer"
import '../../styles/technology_screen.css'


const Technology = () => {
  
  return (
    <div className="min-h-screen bg-no-repeat bg-cover " id="technolgy_screen_container">
      <Header />
      <TechnologyContainer />
    </div>
  )
}

export default Technology