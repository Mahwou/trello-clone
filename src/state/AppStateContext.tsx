import { createContext, useContext } from "react";

type Task = {
    id: string,
    text: string
}

type List = {
    id: string,
    text: string,
    tasks: Task[]
}
