import './List.scss'
import  {ArrowBackIosOutlined, ArrowForwardIosOutlined}  from '@material-ui/icons'
import ListItem from '../ListItem/ListItem'

const List = () => {
  return (
    <div className='list'>
        <span className='listTitle'>Continue Watch</span>
        
        <div className="wrapper">
            <ArrowBackIosOutlined/>
            <div className="container">
                <ListItem/>
            </div>
            <ArrowForwardIosOutlined/>
        </div>
    </div>
  )
}

export default List