import Navbar from "../components/Navbar/Navbar"
import Featured from "../components/Featured/Featured"
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Featured type="movie" />
    </div>
  )
}

export default Home