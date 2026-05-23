import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { AppContainer } from "./styles";
import { useAppState } from "./state/AppStateContext";
import {AddList} from "./state/actions";

export function App() {

  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>

      {
        lists.map(list => <Column key={list.id} id={list.id} text={list.text} />)
      }
      
      <AddNewItem toggleButtonText=" + Add new Cart" 
      dark={false} 
      onAdd={(text) => dispatch(AddList(text))}
      />
      
    </AppContainer>
  );
}
