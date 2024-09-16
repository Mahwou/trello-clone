import { ColumnContainer, ColumnTitle } from "../styles";
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
        </ColumnContainer>
    </>
};