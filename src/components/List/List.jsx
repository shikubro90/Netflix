import './List.scss'
import  {ArrowBackIosOutlined, ArrowForwardIosOutlined}  from '@material-ui/icons'
import ListItem from '../ListItem/ListItem'
import { useRef } from 'react'

const List = () => {
  const listRef = useRef()

  const handleClick = (direction)=>{
    const distance = listRef.current.getBoundingClientRect().x-50
    if(direction === "left"){
      listRef.current.style.transform=`translateX(${230 + distance}px)`
    }else{
      listRef.current.style.transform=`translateX(${-230 + distance}px)`
    }
  }
  

  return (
    <div className='list'>
        <span className='listTitle'>Continue Watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left' onClick={(()=>{handleClick("left")})}/>
            <div className="container" ref={listRef}>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={(()=>{handleClick("right")})} />
        </div>
    </div>
  )
}

export default List