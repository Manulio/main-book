import "../CategoryVote/CategoryVote.css";
import { CandidateList } from "../CandidateList/CandidateList";

export function CategoryVote(props) {
	return (
		<div class="category">
			<p class="title">{props.name}</p>
			<CandidateList candidates={props.candidates} />
		</div>
	);
}
