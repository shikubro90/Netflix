import "./navbar.scss"
import Search from '@material-ui/icons/Search'
import Notifications from '@material-ui/icons/Notifications'
import ArrowDrop from '@material-ui/icons/ArrowDropDown'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
          <div className="left">
            <img src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress" alt="netflix-logo" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className="right">
            <Search/>
            <span>KID</span>
            <Notifications/>
            <img src="https://yt3.ggpht.com/ytc/AMLnZu9kXb-taSahZVptjZQQ4pcwERM8XnQ7PQ_wnMKXE-2MJclcE5-hT2Hvvq8M2zUG=s88-c-k-c0x00ffffff-no-rj" alt="profile" />
            
          </div>
        </div>
    </div>
  )
}

export default Navbar