import { userReducer } from './user-reducer'

test("userReducer should change only age", ()=>{
	let startState = {age: 20, childrenCount: 2, name: 'Dimych'}
	let finalState = userReducer(startState, {type: "INCREMENT-AGE"})
	expect(finalState.age).toBe(21);
	expect(finalState.childrenCount).toBe(2);
	expect(finalState.name).toBe("Dimych");
})
test("userReducer should change childrenCount", ()=>{
	let startState = {age: 20, childrenCount: 2, name: 'Dimych'}
	let finalState = userReducer(startState, {type: "INCREMENT-CHILDREN-COUNT"})
	expect(finalState.age).toBe(20);
	expect(finalState.childrenCount).toBe(3);
	expect(finalState.name).toBe("Dimych");
})
test("userReducer should change only name", ()=>{
	let startState = {age: 20, childrenCount: 2, name: 'Dimych'}
	const newName = "Roma";
	let finalState = userReducer(startState, {type: "CHANGE-NAME", newName: newName})
	expect(finalState.age).toBe(20);
	expect(finalState.childrenCount).toBe(2);
	expect(finalState.name).toBe(newName);
})