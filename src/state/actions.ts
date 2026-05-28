export type Action =
    | {type: "ADD_LIST", payload: string}
    | {type: "ADD_TASK", payload: {listId: string, text: string}}
    | {type: "MOVE_LIST", payload: {draggedId: string, hoverId: string}}
    | {type: "MOVE_TASK", payload: {draggedId: string, hoverId: string}}

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