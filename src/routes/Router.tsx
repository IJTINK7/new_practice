import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Page} from "../components/pages/Page";
import {dataState} from "../components/dataState/dataState";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		errorElement: <Error404/>,
		children: [
			{
				path: "/page/:id",
				element: (
					<Page pages={dataState.pages}/>
				),
			},
		],
	},
]);