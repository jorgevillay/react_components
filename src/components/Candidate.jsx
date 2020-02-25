import React from 'react';

function Candidate(props) {
    return (
        <div className={props.candidate.selected ? 'row border bg-warning' : 'row border'}>
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label>First name:</label>
                            <input type="text" name="firstname" value={props.candidate.firstname} className="form-control capitalized-text" readOnly />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label>Last name:</label>
                            <input type="text" name="lastname" value={props.candidate.lastname} className="form-control capitalized-text" readOnly />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label>Age:</label>
                            <input type="number" name="age" value={props.candidate.age} className="form-control" readOnly />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label>Slogan:</label>
                            <input type="text" name="slogan" value={props.candidate.slogan} className="form-control capitalized-text" readOnly />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label>Votes:</label>
                            <input type="number" name="votes" value={props.candidate.votes} className="form-control" readOnly />
                        </div>
                    </div>
                    <div className="col-sm-4 mt-3">
                        <button className={props.candidate.votes === 0 ? 'btn btn-danger mr-1 disabled no-pointer' : 'btn btn-danger mr-1'} onClick={() => props.handleClick('down', props.candidate.key)}>Vote DOWN</button>
                        <button className={props.candidate.votes === 20 ? 'btn btn-success ml-1 disabled no-pointer' : 'btn btn-success ml-1'} onClick={() => props.handleClick('up', props.candidate.key)}>Vote UP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Candidate;