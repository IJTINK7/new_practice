import React from 'react';
import {ContentPropsType} from "./Content";


export const HomePage = (props:ContentPropsType) => {
	return (
		<div>
			<div>{props.heading}</div>
			<div>{props.about}</div>
		</div>
	);
};
