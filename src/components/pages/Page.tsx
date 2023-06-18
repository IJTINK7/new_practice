import React from 'react';
import {PagesType} from "../dataState/dataState";
import {Route, Routes, useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
	pages: PagesType[]
}
export const Page = (props: PropsType) => {
	const params = useParams();
	console.log(params)
	if (Number(params.stolenID) <= Number(props.pages.length)) {
		return (
			<div>
				<div>Heading: {props.pages[Number(params.stolenID)].heading}</div>
				<div>About: {props.pages[Number(params.stolenID)].about}</div>
			</div>

		);
	}else
		return (
			<Routes>
				<Route path={"/*"} element={<Error404/>}/>
			</Routes>
		)
};