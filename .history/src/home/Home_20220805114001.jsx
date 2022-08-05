import Navbar from "../components/Navbar/Navbar"
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <img src="https://www.desktopbackground.org/download/o/2011/04/02/181562_godzilla-movie-poster-creator_1920x1080_h.jpg" alt="poster" />
    </div>
  )
}

export default Home