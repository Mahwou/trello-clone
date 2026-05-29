import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { Cart } from "./Card";
import { useAppState } from "../state/AppStateContext";
import {addTask, moveList} from "../state/actions";
import {useItemDrag} from "../utils/useItemDrag";
import {useRef} from "react";
import {useDrop} from "react-dnd";
import {throttle} from "throttle-debounce-ts";


type ColumnType = {
    id: string,
    text: string,
};

export const Column = ({id, text}: ColumnType) => {
    const { getTasksByListId, dispatch, draggedItem } = useAppState();
    const tasks = getTasksByListId(id);
    const ref = useRef<HTMLDivElement>(null)
    const { drag } = useItemDrag({type: "COLUMN", id: id, text: text})
    const [,drop] = useDrop({
        accept: "COLUMN",
        hover: throttle(200, () => {
            if (!draggedItem) {
                return
            }
            if (draggedItem.type === "COLUMN") {
                if (draggedItem.id === id) {
                    return;
                }
                dispatch(moveList(draggedItem.id, id))
            }
        })
    })

    drag(drop(ref))

    return <>
        <ColumnContainer ref={ref}>
            <ColumnTitle> {text} :</ColumnTitle>
            {
                tasks.map(task => <Cart key={task.id} id={task.id} text={task.text} />)
            }
            <AddNewItem toggleButtonText=" + Add new Item" dark={true} onAdd={(text) => {
                dispatch(addTask(id,text))
                console.log(text)
            }} />
        </ColumnContainer>
    </>
};