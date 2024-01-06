import DestinationContainer from '../../components/destinationContainer'
import Header from '../../components/header'
import '../../styles/destination_screen.css'
const Destination = () => {
  return (
    <div className='w-screen min-h-screen ' id='destination_screen_container'>
      <Header />

      <DestinationContainer />
    </div>
  )
}

export default Destination