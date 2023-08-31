import React from 'react';
import { useNavigate } from 'react-router-dom';

export type ContentPropsType = {
	heading: number
	about: number
}

export const Content = (props: any) => {

	const navigate = useNavigate();
	const onClickBackHandler = () => {
		navigate(-1)
	}
	const onClickHomeHandler = () => {
		navigate("/page/0")
	}

	return (
		<div>
			<div>{props.heading}</div>
			<div>{props.about}</div>
			<div style={{display: "flex", justifyContent: "center"}}>
				<button onClick={onClickBackHandler} style={{margin: "20px", width: "100px", height: "50px"}}>Back</button>
				<button onClick={onClickHomeHandler} style={{margin: "20px", width: "100px", height: "50px"}}>Home</button>
			</div>
		</div>
	);
};
