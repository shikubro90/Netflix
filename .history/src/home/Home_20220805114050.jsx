import Navbar from "../components/Navbar/Navbar"
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <img src="http://images6.fanpop.com/image/photos/40000000/London-Has-Fallen-Movie-Desktop-Wallpaper-movie-trailers-40045635-2560-1600.jpg" alt="poster" />
    </div>
  )
}

export default Home