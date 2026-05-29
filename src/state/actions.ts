import {DragItem} from "../components/DragItem";

export type Action =
    | {type: "ADD_LIST", payload: string}
    | {type: "ADD_TASK", payload: {listId: string, text: string}}
    | {type: "MOVE_LIST", payload: {draggedId: string, hoverId: string}}
    | {type: "SET_DRAGGED_ITEM", payload: DragItem|null}

export const addList = (text: string): Action => ({
    type: "ADD_LIST",
    payload: text
})

export const addTask = (listId: string, text: string): Action => ({
    type: "ADD_TASK",
    payload: {text, listId}
})

export const moveTask = () => {

}

export const moveList = (draggedId: string, hoverId: string): Action => ({
    type: "MOVE_LIST",
    payload: {draggedId: draggedId, hoverId: hoverId}
})

export const setDraggedItem = (draggedItem: DragItem|null): Action => ({
    type: "SET_DRAGGED_ITEM",
    payload: draggedItem
})