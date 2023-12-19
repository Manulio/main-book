import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./normalize.css";

import { Vote } from "./Vote/Vote";
import { Header } from "./Header/Header";
const root = ReactDOM.createRoot(document.getElementById("root"));
const candidates = [
	{
		name: "Churri",
		description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
		image: "https://cdn.discordapp.com/attachments/836766990470742107/1103155057362477087/IMG-20230428-WA0003.jpg",
	},
	{
		name: "Jere",
		description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
		image: "https://cdn.discordapp.com/attachments/836766990470742107/1101354972068720720/73365DBF-985D-4A97-9659-31D17CCC29EC.png",
	},
	{
		name: "Chueco",
		description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy",
		image: "https://cdn.discordapp.com/attachments/836766990470742107/1101280146113167380/image.png",
	},
	{
		name: "Nico",
		description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
		image: "https://cdn.discordapp.com/attachments/836766990470742107/1103163530217275462/image.png",
	},
	{
		name: "Lucas",
		description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
		image: "https://cdn.discordapp.com/attachments/836766990470742107/1103161904911896596/Screenshot_20230503-003125_WhatsApp.jpg",
	},
	{
		name: "Yepe",
		description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
		image: "https://cdn.discordapp.com/attachments/836766990470742107/1103162265546522724/image.png",
	},
	{
		name: "Manulio",
		description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
		image: "https://cdn.discordapp.com/attachments/836766990470742107/1103162364230115389/image0.jpg",
	},
	{
		name: "Coore",
		description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
		image: "https://cdn.discordapp.com/attachments/836766990470742107/1103162477195313213/IMG-20230302-WA0001.jpg",
	},
	{
		name: "EV",
		description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
		image: "https://cdn.discordapp.com/attachments/836766990470742107/1103162576390606858/IMG-20230227-WA0024.jpg",
	},
	{
		name: "Paulette",
		description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
		image: "https://cdn.discordapp.com/attachments/836766990470742107/1103162900476076032/image.png",
	},
	{
		name: "Spicy",
		description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
		image: "https://cdn.discordapp.com/attachments/836766990470742107/1103162995804213378/IMG-20230120-WA00221.jpg",
	},
	{
		name: "Touro",
		description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
		image: "https://cdn.discordapp.com/attachments/836766990470742107/1103163147998728323/IMG-20221119-WA0011.jpg",
	},
	
	
];
const categories = [
	{
		id: "1",
		name: "El Mas buitre",
		description: "Un buitre con notas a boliviana.",
	},
	{
		id: "2",
		name: "El Comegordas",
		description: "Un buitre, con notas a savana africana.",
	},
	{
		id: "3",
		name: "El mas puto",
		description: "Un buitre, con notas a savana africana.",
	},
];
const voters = [
	{
		id: 1,
		name: "Yepe",
	},
	{
		id: 2,
		name: "Jere",
	},
	{
		id: 3,
		name: "Touro",
	},
	{
		id: 4,
		name: "EV",
	},
	{
		id: 5,
		name: "Chueco",
	},
	{
		id: 6,
		name: "Manulio",
	},
];

const voterId = 6;//can change
const currentVoter = voters.find(voter => voter.id === voterId)?.Id;

root.render(
	<>
		<Header title="CGArmy Awards"/>
		<Vote categories={categories} candidates={candidates} categoryToDisplay={categories[0].id} currentVoter={currentVoter}/>
	</>
);
