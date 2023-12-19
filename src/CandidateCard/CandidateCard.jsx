import React from "react";

 
import "../CandidateCard/CandidateCard.css";

export function CandidateCard(props) {
    return (
        <div class="candidate-card-container" onClick={props.handleClose}>
          <div class="candidate-card">
            <div class="candidate-card-content">
              <img src={props.member.image} alt={props.member.name} />
              <div class="candidate-card-info">
                <div>
                  <p class="candidate-card-name">{props.member.name}</p>
                  <p class="candidate-card-description">{props.member.description}</p>
                </div>
                <button class="candidate-card-button">Votar</button>
              </div>
              
            </div>
            
          </div>
          
        </div>
      );
}

