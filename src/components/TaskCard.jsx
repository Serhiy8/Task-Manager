import { BlurContainer } from "../utils/Styles.styled";

const TaskCard = ({dataTask}) => {
    
    return(
        <BlurContainer>
            <ul>
                {dataTask.map(el => {

                    const addTime = el.created_at;
                    const date = new Date(addTime);
                    const day = date.getDate();
                    const month = date.getMonth();
                    const year = date.getFullYear();
                    const fullDate = `${day}/${month}/${year}`

                    return (<li key={el.id}>
                            <p>{`${fullDate}`}</p>                            
                            <p>{el.task}</p>
                            <input type="checkbox" name="" id="" />
                        </li>)
                    })}
            </ul>
        </BlurContainer>
    )
}

export default TaskCard;