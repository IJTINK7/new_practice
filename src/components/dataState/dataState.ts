export type PagesType ={
	heading: number
	about: number
}
export type DataStateType = {
	pages: PagesType[]
}
export const dataState: DataStateType = {
	pages: [
		{
			heading: 1,
			about: 111,
		},
		{
			heading: 2,
			about: 222,
		},
		{
			heading: 3,
			about: 333,
		},
	],
}
