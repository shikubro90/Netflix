import './featured.scss'
import { PlayArrow } from '@material-ui/icons'

const Featured = () => {
  return (
    <div className='featured'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c8c8a0ad-86d6-45f1-b21d-821afa4e5027/3dd40b6f-3366-4f38-af74-5f11db137e52/BD-en-20220801-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="poster" />

        <div className="info">
          <span className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime voluptatem labore ipsum, modi consequatur saepe ex facilis sed ea ratione corrupti quia. Praesentium dolores magnam cupiditate rem possimus quis ea.
          </span>
          <div className="buttons">
            <button className="play">
              Play <PlayArrow/>
            </button>
            <button className="info">
              Play <PlayArrow/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Featured