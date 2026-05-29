import {createContext, Dispatch, FC, ReactNode, useContext} from "react";
import {AppState, appStateReducer, List, Task} from "./appStateReducer";
import {Action} from "./actions";
import {useImmerReducer} from "use-immer";
import {DragItem} from "../components/DragItem";


const appData: AppState = {
    draggedItem: null,
    lists: [
        {   id: '01',
            text: 'Conseils Habitat',
            tasks: [
                { id: '0', text: 'First note' },
                { id: '1', text: 'Second note' },
                { id: '2', text: 'Third note' },
                { id: '3', text: 'Fourth note' }
            ]
        },
        {   id: '02',
            text: 'Gesty',
            tasks: [
                { id: '4', text: 'First note' },
                { id: '5', text: 'Second note' },
                { id: '6', text: 'Third note' },
                { id: '7', text: 'Fourth note' }
            ]
        },
        {   id: '03',
            text: 'To do',
            tasks: [
                { id: '8', text: 'First task' },
                { id: '9', text: 'Second task' }
            ]
        },
        {   id: '04',
            text: 'Done',
            tasks: [
                { id: '10', text: 'First done task' },
                { id: '11', text: 'Second done task' }
            ]
        },
        {   id: '05',
            text: 'In progress',
            tasks: [
                { id: '12', text: 'First in progress task' },
                { id: '13', text: 'Second in progress task' }
            ]
        }
    ]
}

type AppStateContextProps = {
    lists: List[],
    getTasksByListId(id: string): Task[],
    dispatch: Dispatch<Action>,
    draggedItem: DragItem|null
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)
    const { lists, draggedItem }  = state;
    
    const getTasksByListId = (id: string) => {
        return lists.find(list => list.id === id)?.tasks || [];
    };

    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch, draggedItem }}>
            {children}
        </AppStateContext.Provider>
    );
}

export const useAppState = () => {
    return useContext(AppStateContext);
}
