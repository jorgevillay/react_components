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
    <div>
      <h1>Welcome to VotingInterface</h1>
      <h4>Total votes count (up and down): {state.totalVotes}</h4>
      <CandidateList candidates={state.candidates} handleClick={handleClick} />
      <button onClick={resetInterface}>Recreate random voting list</button>
      <br />
      <Link to="/">Return to main menu</Link>
    </div>
  )
}

export default VotingInterface;