import React from 'react'
import FeedbackItem from './FeedbackItem'
import {AnimatePresence,motion} from 'framer-motion'
import {useContext} from 'react'
import feedbackContext from '../context/FeedbackContext'
const FeedBackList = () => {
  const {feedback} =useContext(feedbackContext);
  if(!feedback || feedback.length===0){
    return <h3>No items...</h3>
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
      {
      feedback.map(item=>
        <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedbackItem key={item.id} item={item}/>
          </motion.div>
      )
      }
      </AnimatePresence>
   
    </div>
  )
}

export default FeedBackList