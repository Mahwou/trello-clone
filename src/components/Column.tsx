import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { Cart } from "./Card";


type ColumnType = {
    text: string,
};

export const Column = ({text} : ColumnType) => {
    return <>
        <ColumnContainer>
            <ColumnTitle> {text} :</ColumnTitle>
            <Cart text="First note"/>
            <Cart text="Second note"/>
            <Cart text="Third note"/>
            <AddNewItem toggleButtonText=" + Add new Item" dark={true} onAdd={() => console.log('Item successfully added !')} />
        </ColumnContainer>
    </>
};