import React from 'react';
import Candidate from '../Candidate';

function CandidateList(props) {
    const orderedCandidates = [].concat(props.candidates).sort((a, b) => b.votes - a.votes || b.age - a.age).map(item => (
        <li className="mb-3" key={item.key}>
            <Candidate candidate={item} handleClick={props.handleClick} />
        </li>
    ))
    return (
        <ul className="no-bullet-list p-0 m-0 pr-3 pl-3">
            {orderedCandidates}
        </ul>
    )
}

export default CandidateList;