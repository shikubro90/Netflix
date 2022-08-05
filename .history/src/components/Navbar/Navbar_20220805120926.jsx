import "./navbar.scss"
import netflixLogo from "../../assets/netflix.png"
import Search from '@material-ui/icons/Search'
import Notifications from '@material-ui/icons/Notifications'
import ArrowDrop from '@material-ui/icons/ArrowDropDown'

const Navbar = () => {

  clg

  return (
    <div className="navbar">
        <div className="container">
          <div className="left">
            <img src={netflixLogo} alt="netflix-logo" />
            <span>HomePage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className="right">
            <Search className="icon"/>
            <span>KID</span>
            <Notifications className="icon"/>
            <img src="https://yt3.ggpht.com/ytc/AMLnZu9kXb-taSahZVptjZQQ4pcwERM8XnQ7PQ_wnMKXE-2MJclcE5-hT2Hvvq8M2zUG=s88-c-k-c0x00ffffff-no-rj" alt="profile" />
            <div className="profile">
              <ArrowDrop className="icon"/>
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar