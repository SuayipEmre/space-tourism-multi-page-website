import Header from '../../components/header'
import '../../styles/home.css'

const Home = () => {
  return (
    <div className=' overflow-auto lg:overflow-hidden  min-h-screen bg-home-tablet lg:bg-home-desktop bg-no-repeat bg-cover'>
      <Header />
      <div className=' h-screen   overflow-hidden flex items-center justify-center'>

        <div className=' w-full gap-24 lg:gap-0 lg:w-[90%]  flex flex-col lg:flex-row items-center justify-between'>

          <div className=' text-center w-[60%] lg:w-[40%]  flex flex-col items-center gap-6'>
            <h5 className="text-indigo-200  text-[20px] lg:text-[28px] font-normal font-['Barlow Condensed'] tracking-[4.72px]">SO, YOU WANT TO TRAVEL TO </h5>
            <p className='text-[150px] tracking-widest text-white'>SPACE</p>
            <p className='text-[16px] lg:text-[18px] text-[#D0D6F9] lg:w-[70%] '>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>

          <div className='w-[242px] h-[242px] lg:w-[274px] lg:h-[274px] bg-white rounded-full flex items-center justify-center'>
            <p className='text-[32px]'>EXPLORE</p>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Home