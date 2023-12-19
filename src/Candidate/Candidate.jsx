import "../Candidate/Candidate.css";
import React, { useState } from "react";

import { CandidateCard } from "../CandidateCard/CandidateCard";

export function Candidate(props) {
	const [isOpen, setIsOpen] = useState(false);
 
	const togglePopup = () => {
		setIsOpen(!isOpen);
	}
	
	return (<>

		<div class="member-card" onClick={togglePopup}>
			<img src={props.image}></img>
			<div class="overlay">
				<div class="text">{props.name}</div>
			</div>
		</div>
		{
		isOpen && <CandidateCard
			member = {props}
			handleClose={togglePopup}
			/>
		}
	</>
		
	);

}
