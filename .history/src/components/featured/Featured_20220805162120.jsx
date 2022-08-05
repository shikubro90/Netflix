import './featured.scss'
import { PlayArrow, Info } from '@material-ui/icons'

const Featured = ({type}) => {

  return (
    <div className='featured'>

      {type && (
        <div className='category'>
          <span>{type === "movie" ? "Movie" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="">Sci-fi</option>
            <option value="historical">Historical</option>
            <option value="historical">Historical</option>
          </select>
        </div>
      )}

        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c8c8a0ad-86d6-45f1-b21d-821afa4e5027/3dd40b6f-3366-4f38-af74-5f11db137e52/BD-en-20220801-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="poster" />

        <div className="info">
          <span className='movie_title'>Matrix</span>
          <span className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime voluptatem labore ipsum, modi consequatur saepe ex facilis sed ea ratione corrupti quia. Praesentium dolores magnam cupiditate rem possimus quis ea.
          </span>

          <div className="buttons">
              <button className="play">
                <PlayArrow/>
                <span>Play</span>
              </button>
              <button className="more">
                <Info/>
                <span>Info</span>
              </button>
          </div>

        </div>
    </div>
  )
}

export default Featured