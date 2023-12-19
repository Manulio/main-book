import { Candidate } from "../Candidate/Candidate";
import "../CandidateList/CandidateList.css";

export function CandidateList(props) {
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
