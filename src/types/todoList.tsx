export type TodoItem = {
    id: string
    label: string
    completed: boolean
}

export enum TODO_LIST_FILTER {
    All,
    Active,
    Completed,
}

export type TodoListFilter = {
    id: TODO_LIST_FILTER
    label: string
    alias: string
}
