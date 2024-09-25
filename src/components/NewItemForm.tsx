import { useState } from "react";
import { NewItemFormContainer, NewItemFormInput, NewItemFormButton } from "../styles";

type NewItemFormType = {
    onAdd(text: string): void
};

export const NewItemForm = ({onAdd}: NewItemFormType) => {
    const [text, setText] = useState('');

    return (
        <NewItemFormContainer>
            <NewItemFormInput value={text} onChange={(e) => setText(e.target.value)} />
            <NewItemFormButton>Create</NewItemFormButton>
        </NewItemFormContainer>
    );
};