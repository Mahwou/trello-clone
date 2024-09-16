import { useState } from "react";
import { AddItemButton } from "../styles";

type AddNewItemType = {
    onAdd(text: string): void,
    toggleButtonText: string,
    dark?: boolean
};

export const AddNewItem = ({onAdd, toggleButtonText, dark}: AddNewItemType) => {
    const [showForm, setShowForm] = useState(false);

    if (showForm) {
        // show form here
    }

    return <AddItemButton dark={dark} onClick={()=> setShowForm(true)}>{toggleButtonText}</AddItemButton>
};