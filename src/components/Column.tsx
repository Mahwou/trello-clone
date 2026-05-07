import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { Cart } from "./Card";
import { useAppState } from "../state/AppStateContext";


type ColumnType = {
    id: string,
    text: string,
};

export const Column = ({id, text}: ColumnType) => {
    const { getTasksByListId } = useAppState();
    const tasks = getTasksByListId(id);

    return <>
        <ColumnContainer>
            <ColumnTitle> {text} :</ColumnTitle>
            {
                tasks.map(task => <Cart key={task.id} id={task.id} text={task.text} />)
            }
            <AddNewItem toggleButtonText=" + Add new Item" dark={true} onAdd={(e) => console.log(e)} />
        </ColumnContainer>
    </>
};