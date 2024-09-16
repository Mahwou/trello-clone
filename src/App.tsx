import { AppContainer, CartContainer, ColumnContainer, ColumnTitle } from "./styles";

export function App() {
  return (
    <AppContainer>
      <ColumnContainer>
        <ColumnTitle>Conseils Habitat: </ColumnTitle>

        <CartContainer>First Items</CartContainer>
        <CartContainer>Second Items</CartContainer>
        <CartContainer>Third Items</CartContainer>
      </ColumnContainer>

      <ColumnContainer>
        <ColumnTitle>Gesty: </ColumnTitle>

        <CartContainer>First Items</CartContainer>
        <CartContainer>Second Items</CartContainer>
        <CartContainer>Third Items</CartContainer>
      </ColumnContainer>
      
    </AppContainer>
  );
}
