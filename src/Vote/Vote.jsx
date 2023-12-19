import { CategoryVote } from "../CategoryVote/CategoryVote";
import React, { useState } from "react";
import "./Vote.css";


export function Vote(props) {
	let [currentCategory, setCurrentCategory] = useState(parseInt(props.categories[0].id));
	let [categotyClass, setcategotyClass] = useState("category-vote-container");
	categotyClass = "category-vote-container";
	const category = props.categories.find((category) => category.id == currentCategory);
	return(         
		<>
			<CategoryVote
				name={category.name}
				candidates={props.candidates}
			/>
			<p onClick={nextCategory}>nextCategory</p>
		</>
	);
	

		
	

	function nextCategory() {
		const possibleIndex = props.categories.map(c => c.id).indexOf(currentCategory) + 1;
		let nextCategoryIndex = possibleIndex < props.categories.length ? possibleIndex : 0;
		setCurrentCategory(props.categories[nextCategoryIndex].id);
		setcategotyClass("category-vote-container hidden")


	}


	
}
