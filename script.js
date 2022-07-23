let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};
  
const compareGuesses = (user,comp,target) => {
  if (user < 0 || user > 10) {
  throw alert('Please choose a number between 0 and 10');
  }
  else {
    const userDiff = Math.abs(target - user);
    const compDiff = Math.abs(target - comp);
    return userDiff <= compDiff;
  };
};
  
const updateScore = winner => {
    if(winner === 'human') {
      humanScore +=1;
    }
    else if(winner === 'computer') {
      computerScore +=1;
    };
};
  
const advanceRound = () => {
    currentRoundNumber +=1;
};
