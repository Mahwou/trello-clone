export type Action =
    | {type: "ADD_LIST", payload: string}
    | {type: "ADD_TASK", payload: {listId: string, text: string}}

export const AddList = (text: string): Action => ({
    type: "ADD_LIST",
    payload: text
})

export const AddTask = (listId: string, text: string): Action => ({
    type: "ADD_TASK",
    payload: {text, listId}
})