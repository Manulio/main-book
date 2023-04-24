import "./CategoryVote.css";
import { CandidateList } from "./CandidateList";

export function CategoryVote(props) {
	return (
		<div class="category">
			<p class="title">{props.category}</p>
			<CandidateList candidates={props.candidates} />
		</div>
	);
}
