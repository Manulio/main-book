import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { Vote } from "./Vote";
const root = ReactDOM.createRoot(document.getElementById("root"));
const candidates = [
	{
		name: "Yepe",
		description: "Un buitre con notas a boliviana.",
		image: "https://previews.123rf.com/images/kenbenner/kenbenner1406/kenbenner140600023/29465002-ilustraci%C3%B3n-de-dibujos-animados-de-un-buitre.jpg",
	},
	{
		name: "Jere",
		description: "Un buitre, con notas a savana africana.",
		image: "https://i.pinimg.com/736x/78/4e/66/784e6671ff98eb6b0e656f3514dddb74.jpg",
	},
	{
		name: "Touro",
		description: "Un buitre, con notas a savana africana.",
		image: "https://i.pinimg.com/736x/78/4e/66/784e6671ff98eb6b0e656f3514dddb74.jpg",
	},
	{
		name: "EV",
		description: "Un buitre, con notas a savana africana.",
		image: "https://i.pinimg.com/736x/78/4e/66/784e6671ff98eb6b0e656f3514dddb74.jpg",
	},
	{
		name: "EV",
		description: "Un buitre, con notas a savana africana.",
		image: "https://i.pinimg.com/736x/78/4e/66/784e6671ff98eb6b0e656f3514dddb74.jpg",
	},
	{
		name: "EV",
		description: "Un buitre, con notas a savana africana.",
		image: "https://i.pinimg.com/736x/78/4e/66/784e6671ff98eb6b0e656f3514dddb74.jpg",
	},
];
const categories = [
	{
		name: "El Mas buitre",
		description: "Un buitre con notas a boliviana.",
	},
	{
		name: "El Comegordas",
		description: "Un buitre, con notas a savana africana.",
	},
	{
		name: "El mas puto",
		description: "Un buitre, con notas a savana africana.",
	},
];

root.render(
	<>
		<Vote categories={categories} candidates={candidates} />
	</>
);
