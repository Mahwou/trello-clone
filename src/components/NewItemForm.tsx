import React, { useState } from "react";
import { NewItemFormContainer, NewItemFormInput, NewItemFormButton } from "../styles";
import { useFocus } from "../utils/useFocus";

type NewItemFormType = {
    onAdd(text: string): void
};

export const NewItemForm = ({onAdd}: NewItemFormType) => {
    const [text, setText] = useState('');
    const inputRef = useFocus();

    const handleSumit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        
        if(e.key === "Enter") onAdd(text);
    };

    return (
        <NewItemFormContainer>
            <NewItemFormInput 
            ref={inputRef} value={text} 
            onChange={(e) => setText(e.target.value)} 
            onKeyPress={handleSumit}
            />
            <NewItemFormButton>Create</NewItemFormButton>
        </NewItemFormContainer>
    );
};