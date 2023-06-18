import React from 'react';
import {PagesType} from "../dataState/dataState";
import {useParams} from "react-router-dom";


type PropsType = {
	pages: PagesType[]
}
export const Page = (props: PropsType) => {
	const params = useParams();
	console.log(params)
	return (
		<div>
			hi
		</div>
	);
};