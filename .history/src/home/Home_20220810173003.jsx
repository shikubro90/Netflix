import "./home.scss"
import Navbar from "../components/Navbar/Navbar"
import Featured from "../components/Featured/Featured"
import List from "../components/List/List"

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Featured type="Series" />
      <List/>
      <List/>

    </div>
  )
}

export default Home