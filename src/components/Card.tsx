import { CartContainer } from "../styles";

type CartType = {
    text: string,
};
export const Cart = ({text}: CartType) => {
    return (
        <CartContainer>{text}</CartContainer>
    );
};