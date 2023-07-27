import React from 'react';
import {PagesType} from "../dataState/dataState";
import {useParams} from "react-router-dom";
import {HomePage} from "../HomePage";
import {Content} from "../Content";
import {Error404} from "./Error404";

type PagePropsType={
	pages: PagesType[]
}

export const Page = (props:PagePropsType) => {
	const params = useParams()
	// {stolenID:"0"}
	console.log(params)
	return(
			Number(params.stolenID) === 0
			? <HomePage heading={props.pages[Number(params.stolenID)].heading} about={props.pages[Number(params.stolenID)].about}/>
			: props.pages[Number(params.stolenID)]
			?<Content heading={props.pages[Number(params.stolenID)].heading} about={props.pages[Number(params.stolenID)].about}/>
			: <Error404/>
	);
};