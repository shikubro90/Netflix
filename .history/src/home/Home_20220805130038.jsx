import Navbar from "../components/Navbar/Navbar"
import Featured from "../components/Featured/"
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