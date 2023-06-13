import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

type ActionsType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistTitleActionType |ChangeTodolistFilterActionType
type RemoveTodolistActionType={
	type: 'REMOVE-TODOLIST'
	id: string
}
type AddTodolistActionType={
	type: 'ADD-TODOLIST'
	title: string
}
type ChangeTodolistTitleActionType={
	type: 'CHANGE-TODOLIST-TITLE'
	id: string
	title: string
}
type ChangeTodolistFilterActionType={
	type: 'CHANGE-TODOLIST-FILTER'
	id: string
	filter: FilterValuesType
}
// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописанному type в этом action (инструкции) я поменяю state

export const todolistsReducer = (state: TodolistType[], action: ActionsType): TodolistType[] => {
	switch (action.type) {
		case 'REMOVE-TODOLIST':
			return state.filter(el=>el.id !== action.id)
		case 'ADD-TODOLIST':
			return [...state,{id: v1(), title: action.title, filter: 'all'}]
		case 'CHANGE-TODOLIST-TITLE':
			return state.map(el=>el.id === action.id ? {...el, title: action.title}: el )
		case 'CHANGE-TODOLIST-FILTER':
			return state.map(el=>el.id === action.id ? {...el, filter: action.filter}: el )
		default:
			throw new Error("I don't understand this type")
	}
}

export const RemoveTodolistAC = (todolistId: string): RemoveTodolistActionType => {
	return {type: 'REMOVE-TODOLIST', id: todolistId}
}