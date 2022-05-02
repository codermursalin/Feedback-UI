import {createContext,useState} from 'react'
import { v4 as uuidv4 } from "uuid";
const FeedbackContext=createContext();
export const FeedbackProvider=({children})=>{
    const [feedback,setFeedback]=useState([])
    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    })
      const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete item?")) {
          const newFeedbacks = feedback.filter((item) => item.id !== id);
          setFeedback(newFeedbacks);
        }
      };
      const addFeedback = (newFeedback) => {
        setFeedback((prev) => {
          return [{ ...newFeedback, id: uuidv4() }, ...prev];
        });
      };

      const editFeedback = (item) => {
        setFeedbackEdit({item,edit:true})
      };
      const updateFeedback = (id,item) => {
        setFeedback(feedback.map(ele=>ele.id===id?{...ele,...item}:ele));
        setFeedbackEdit({
          item:{},
          edit:false
        });
      };

    return(
        <FeedbackContext.Provider value={{feedback,handleDelete,addFeedback,editFeedback,feedbackEdit,updateFeedback}}>
            {children}
        </FeedbackContext.Provider>
    )
}
export default FeedbackContext;