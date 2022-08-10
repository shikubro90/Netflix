import './List.scss'
import  {ArrowBackIosOutlined, ArrowForwardIosOutlined}  from '@material-ui/icons'

const List = () => {
  return (
    <div className='list'>
        <span className='listTitle'>Continue Watch</span>
        
        <div className="wrapper">
            <ArrowBackIosOutlined/>
            <div className="container">

            </div>

        </div>
    </div>
  )
}

export default List