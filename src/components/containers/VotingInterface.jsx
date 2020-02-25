import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CandidateList from './CandidateList';

const generateRandomString = (length) => {
  let result = '';
  const characters = 'abcdefghijklmnñopqrstuvwxyz';
  for (let index = 0; index < length; index++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const generateRandomSentence = (length, words) => {
  let result = '';
  for (let index = 0; index < words; index++) {
    result += `${generateRandomString(length)} `
  }
  return result;
}

function VotingInterface(props) {
  const [state, setState] = useState({
    totalVotes: 0,
    candidates: Array.from({ length: props.match.params.candidates }, (element, index) => {
      return {
        key: index,
        firstname: generateRandomString(10),
        lastname: generateRandomString(10),
        age: Math.floor(Math.random() * 50) + 18,
        slogan: generateRandomSentence(5, 10),
        votes: Math.floor(Math.random() * 11),
        selected: false
      }
    })
  })
  const handleClick = (type, key) => {
    setState(prev => {
      return {
        totalVotes: prev.totalVotes + 1,
        candidates: prev.candidates.map((item, index) => {
          if (index === key) {
            type === 'up' ? item.votes++ : item.votes--;
            item.selected = true;
          } else item.selected = false;
          return item
        })
      }
    })
  }
  const resetInterface = () => {
    setState({
      totalVotes: 0,
      candidates: Array.from({ length: Math.ceil(Math.random() * 20) }, (element, index) => {
        return {
          key: index,
          firstname: generateRandomString(10),
          lastname: generateRandomString(10),
          age: Math.floor(Math.random() * 50) + 18,
          slogan: generateRandomSentence(5, 10),
          votes: Math.floor(Math.random() * 11),
          selected: false
        }
      })
    })
  }
  return (
    <div className="container-fluid pt-4 pb-4">
      <div className="row">
        <div className="col-sm-10 offset-sm-1">
          <div className="card text-center">
            <div className="card-header">
              <h5 className="card-title mb-0">React coding examples</h5>
            </div>
            <div className="card-body pr-5 pl-5 pt-4 pb-3">
              <h3>Voting list</h3>
              <h5>Total votes count (up and down): {state.totalVotes}</h5>
              <ul className="no-bullet-list p-0 m-0 mt-4">
                <li>
                  <CandidateList candidates={state.candidates} handleClick={handleClick} />
                  <button className="btn btn-primary" onClick={resetInterface}>Recreate random voting list</button>
                </li>
                <hr />
                <li className="mt-4">
                  <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                      <button type="button" className="btn btn-link">
                        <Link to="/">Return to main menu</Link>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-footer text-muted">
              Developed using React and Formik
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VotingInterface;