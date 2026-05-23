import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { Cart } from "./Card";
import { useAppState } from "../state/AppStateContext";
import {AddTask} from "../state/actions";


type ColumnType = {
    id: string,
    text: string,
};

export const Column = ({id, text}: ColumnType) => {
    const { getTasksByListId, dispatch } = useAppState();
    const tasks = getTasksByListId(id);

    return <>
        <ColumnContainer>
            <ColumnTitle> {text} :</ColumnTitle>
            {
                tasks.map(task => <Cart key={task.id} id={task.id} text={task.text} />)
            }
            <AddNewItem toggleButtonText=" + Add new Item" dark={true} onAdd={(text) => {
                dispatch(AddTask(id,text))
                console.log(text)
            }} />
        </ColumnContainer>
    </>
};