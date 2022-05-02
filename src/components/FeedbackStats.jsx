import React ,{useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
  const {feedback}=useContext(FeedbackContext);
    const avgRating=(feedback.reduce((acc,item)=>{
        return acc+=item.rating;
    },0)/feedback.length).toFixed(1);
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4> 
        <h4>Average Ratings : {isNaN(avgRating)?0:avgRating}</h4>

    </div>
  )
}

export default FeedbackStats