import { Candidate } from "./Candidate";
import "./CandidateList.css";

export function CandidateList(props) {
	console.log(props.candidates);
	const candidateList = (
		<div class="member-list">
			{props.candidates.map((candidate) => (
				<Candidate
					name={candidate.name}
					description={candidate.description}
					image={candidate.image}
				/>
			))}
		</div>
	);

	return candidateList;
}
