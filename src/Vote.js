import { CategoryVote } from "./CategoryVote";

export function Vote(props) {
	console.log(props.categories);
	const out = (
		<div>
			{props.categories.map((category) => {
				<CategoryVote
					category={category.name}
					candidates={props.candidates}
				/>;
			})}
		</div>
	);
	console.log(out);
	return out;
}
