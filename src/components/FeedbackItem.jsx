import React ,{useContext} from 'react'
import {FaTimes,FaEdit} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext';
import Card from './Card'
const FeedbackItem = ({item:{id,text,rating}}) => {
  const {handleDelete,editFeedback} =useContext(FeedbackContext);
  return (
    <Card>
    <div className='num-display'>{rating}</div>
    <button className='close' onClick={()=>handleDelete(id)}>
        <FaTimes color='purple'/>
    </button>
    <button className='edit' onClick={()=>editFeedback({id,text,rating})}>
        <FaEdit color='purple'/>
    </button>
    <div className='text-display'>{text}</div>
  </Card>
  )
}

export default FeedbackItem