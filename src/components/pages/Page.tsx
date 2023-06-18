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
				<div>Heading: {props.pages[Number(params.stolenID)].heading}</div>
				<div>About: {props.pages[Number(params.stolenID)].about}</div>
			</div>
		);
};