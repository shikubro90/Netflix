import Featured from "../components/featured/Featured"
import Navbar from "../components/Navbar/Navbar"
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Featured/>
    </div>
  )
}

export default Home