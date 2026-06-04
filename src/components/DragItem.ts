export type ColumnDragItem = {
    id: string,
    text: string,
    type: "COLUMN"
}

export type RowDragItem = {
    id: string,
    text: string,
    type: "ROW"
}


export type DragItem = ColumnDragItem | RowDragItem