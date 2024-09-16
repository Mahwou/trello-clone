import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { AppContainer } from "./styles";

export function App() {
  return (
    <AppContainer>

      <Column text="Conseils Habitat"></Column>
      <Column text="Gesty"></Column>
      <AddNewItem toggleButtonText=" + Add new Cart" dark={false} onAdd={() => console.log('Cart successfully added !')} />
      
    </AppContainer>
  );
}
