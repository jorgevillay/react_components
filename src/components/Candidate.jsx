import React from 'react';

function Candidate(props) {
    const highlight = {
        backgroundColor: '#FFFF00'
    }
    return (
        <div style={props.candidate.selected ? highlight : null}>
            <label>First name:</label>
            <input type="text" name="firstname" value={props.candidate.firstname} className="capitalized-text" readOnly />
            <br />
            <label>Last name:</label>
            <input type="text" name="lastname" value={props.candidate.lastname} className="capitalized-text" readOnly />
            <br />
            <label>Age:</label>
            <input type="number" name="age" value={props.candidate.age} readOnly />
            <br />
            <label>Slogan:</label>
            <input type="text" name="slogan" value={props.candidate.slogan} className="capitalized-text" readOnly />
            <br />
            <label>Votes:</label>
            <input type="number" name="votes" value={props.candidate.votes} readOnly />
            <br />
            <button className={props.candidate.votes === 20 ? 'disabled-link' : 'false'} onClick={() => props.handleClick('up', props.candidate.key)}>Vote UP</button>
            <button className={props.candidate.votes === 0 ? 'disabled-link' : 'false'} onClick={() => props.handleClick('down', props.candidate.key)}>Vote DOWN</button>
            <br />
            <br />
        </div>
    )
}

export default Candidate;