import { useEffect, useState } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import TaskCard from "../components/TaskCard"
import FormAddTask from "../components/FormAddTask"
import { SectionDB } from "./Dashboard.styled"
import { getTasks } from "../supabaseServices/supabaseTable"


const initialState = [{
    id: 'id-1',
    user_id: 'user-1',
    task: 'learn react',
    status: false,
},{
    id: 'id-2',
    user_id: 'user-1',
    task: 'learn js',
    status: true,
},{
    id: 'id-3',
    user_id: 'user-1',
    task: 'learn HTML',
    status: true,
},{
    id: 'id-4',
    user_id: 'user-1',
    task: 'learn node.js',
    status: false,
}]

const Dashboard = () => {

    const [dataTask, setDataTask] = useState(initialState || []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTasks();
            if(data.error){
                console.log(data.error);
                return;
            }
            setDataTask(data);
        }
        fetchData();
    })

    return(
        <SectionDB>
            <div>
                <Header />
                <Sidebar dataTask={dataTask}/>
                <FormAddTask />
                <TaskCard dataTask={dataTask}/>
            </div>
        </SectionDB>
    )
}

export default Dashboard;