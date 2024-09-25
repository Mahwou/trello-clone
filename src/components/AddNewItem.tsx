import { useState } from "react";
import { AddItemButton } from "../styles";
import { NewItemForm } from "./NewItemForm";

type AddNewItemType = {
    onAdd(text: string): void,
    toggleButtonText: string,
    dark?: boolean
};

export const AddNewItem = ({onAdd, toggleButtonText, dark}: AddNewItemType) => {
    const [showForm, setShowForm] = useState(false);

    if (showForm) {
        return <NewItemForm onAdd={(text) => {setShowForm(!showForm); onAdd(text);}} />
    }

    return <AddItemButton dark={dark} onClick={()=> setShowForm(!showForm)}>{toggleButtonText}</AddItemButton>
};