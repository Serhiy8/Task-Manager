import supabase from "./supabase";

const getTasks = async () => {
    const { data, error } = await supabase
  .from('todolist')
  .select();
  if(error){
    return error;
  }
  return data;
}
const addTask = async (newTask) => {
    const { error } = await supabase
  .from('todolist')
  .insert(newTask);
  if(error){
    return error;
  }
}

export {getTasks, addTask};