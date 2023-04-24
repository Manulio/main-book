import "./Candidate.css";

export function Candidate(props) {
	return (
		<div class="member-card">
			<img src={props.image}></img>
		</div>
	);
}
