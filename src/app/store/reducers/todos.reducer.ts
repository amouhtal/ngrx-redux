

export interface ToDo{
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export function TodosReducer(state: ToDo[], action)