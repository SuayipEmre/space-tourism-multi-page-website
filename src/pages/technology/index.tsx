import { useEffect } from "react"
import Header from "../../components/header"
import TechnologyContainer from "../../components/technologyContainer"
import '../../styles/technology_screen.css'


const Technology = () => {
  useEffect(() => {
    console.log('loading')
  })
  return (
    <div className="min-h-screen bg-no-repeat bg-cover" id="technolgy_screen_container">
      <Header />
      <TechnologyContainer />
    </div>
  )
}

export default Technology