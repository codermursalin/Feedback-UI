import React,{useState,useContext,useEffect} from 'react'
import Card from './Card'
import Button from './Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';
const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const {addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext);
    useEffect(() => {
        if(feedbackEdit.edit===true){
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit])
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(feedbackEdit.edit===true){
            updateFeedback(feedbackEdit.item.id,{text,rating});
        }
        else{
            addFeedback({text,rating});
        }
        
        setText('');
        setRating(10);
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating)=>setRating(rating)}/>
            <div className="input-group">
                <input type="text" placeholder='Write your review' value={text} onChange={(e)=>setText(e.target.value)}/>
                <Button type="submit" isDisabled={text.length<10} version={`${feedbackEdit.edit?'secondary':'primary'}`}>{feedbackEdit.edit?'Edit':'Send'}</Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm