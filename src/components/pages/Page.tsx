import React from 'react';
import {PagesType} from "../dataState/dataState";
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";
import {Content} from "../Content";
import {HomePage} from "../HomePage";

type PropsType = {
	pages: PagesType[]
}
export const Page = (props: PropsType) => {
	const params = useParams();
	return(
		Number(params.stolenID) === 0
			? <HomePage heading={props.pages[Number(params.stolenID)].heading} about={props.pages[Number(params.stolenID)].about}/>
			:
		props.pages[Number(params.stolenID)]
			? <Content heading={props.pages[Number(params.stolenID)].heading} about={props.pages[Number(params.stolenID)].about}/>
			: <Error404/>
	);
};