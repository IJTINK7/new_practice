import {TodolistType} from "../App";

type ActionType = {
	type: string
	[key: string]: any
}

// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописанному type в этом action (инструкции) я поменяю state

export const todolistsReducer = (state: TodolistType[], action: ActionType): TodolistType[] => {
	switch (action.type) {
		case 'xxx':
			return state
		default:
			throw new Error("I don't understand this type")
	}
}