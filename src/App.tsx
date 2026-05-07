import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { AppContainer } from "./styles";
import { useAppState } from "./state/AppStateContext";

export function App() {

  const { lists } = useAppState();

  return (
    <AppContainer>

      {
        lists.map(list => <Column key={list.id} id={list.id} text={list.text} />)
      }
      
      <AddNewItem toggleButtonText=" + Add new Cart" 
      dark={false} 
      onAdd={(e) => console.log(e)} 
      />
      
    </AppContainer>
  );
}
