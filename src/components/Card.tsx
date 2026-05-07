import { CartContainer } from "../styles";

type CartType = {
    id: string,
    text: string,
};
export const Cart = ({id, text}: CartType) => {
    return (
        <CartContainer>
            {text}
        </CartContainer>
    );
};