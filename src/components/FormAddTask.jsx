import SessionContext from "../supabaseServices/sessionContext";
import { addTask } from "../supabaseServices/supabaseTable";
import { Label } from "./FormAddTask.styled";
import { BlurContainer } from "../utils/Styles.styled";
import { useContext, useState } from "react";

const FormAddTask = () => {
    const {user} = useContext(SessionContext);
    const [taskText, setTaskText] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(taskText.trim() === ''){
            console.log("Fields can't be empty.");
            return;
        }

        const res = await addTask({user_id: user.id, task: taskText, status: false});
        
        if(res){
            console.log(res)
        }
        setTaskText('')
    }

    return(
        <BlurContainer>
            <form onSubmit={handleSubmit}>
                <Label>
                    <div>
                        <p>New Task...</p>                    
                        <textarea name="task" rows='5' value={taskText} onChange={(e) => setTaskText(e.target.value)}></textarea>
                    </div>
                    <button type="submit">Add Task</button>
                </Label>
            </form>
        </BlurContainer>
    )
}

export default FormAddTask;