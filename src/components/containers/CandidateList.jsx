import React from 'react';
import Candidate from '../Candidate';

function CandidateList(props) {
    const orderedCandidates = [].concat(props.candidates).sort((a, b) => b.votes - a.votes || b.age - a.age).map(item => (
        <li key={item.key}>
            <Candidate candidate={item} handleClick={props.handleClick} />
        </li>
    ))
    return (
        <ul>
            {orderedCandidates}
        </ul>
    )
}

export default CandidateList;