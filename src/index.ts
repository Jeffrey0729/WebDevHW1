// function merge(arr1: Array<number>, arr2: Array<number>): Array<number> {
//   const array3: Array<number> = [];

//   let end = 0;
//   if (arr1.length > arr2.length) {
//     end = arr1.length;
//   } else {
//     end = arr2.length;
//   }

//   for (let i = 0; i < end; i += 1) {
//     if (i < arr1.length && i < arr2.length) {
//       array3.push(arr1[i]);
//       array3.push(arr2[i]);
//     } else if (i >= arr1.length) {
//       array3.push(arr2[i]);
//     } else if (i >= arr2.length) {
//       array3.push(arr1[i]);
//     }
//   }
//   return array3;
// }

// const array1: Array<number> = [4, 5, 23, 18, 9, -5, 31];
// const array2: Array<number> = [18, 74, 88, 3];

// // Now we are passing `array2` first
// const mergedArray: Array<number> = merge(array2, array1);
// console.log(mergedArray);

// This code is just meant as an example to show iteration over strings and usage
// for the .includes() method. Don't actually copy it into your solution.

// function checkWord(guessWord: string, correctWord: string): string {
//   let guess: string = '';
//   for (let i = 0; i < 5; i += 1) {
//     if (guessWord[i] === correctWord[i]) {
//       guess += 'c';
//     } else if (correctWord.includes(guessWord[i])) {
//       guess += 'p';
//     } else {
//       guess += 'a';
//     }
//   }
//   return guess;
// }

// const firstName = 'Chris';
// for (let i = 0; i < firstName.length; i += 1) {
//   const letter = firstName[i];
//   console.log(letter);
// }

// if (firstName.includes('C')) {
//   console.log('Makes sense');
// } else {
//   console.log('This will not display');
// }

// const attempts = ['rains', 'shout', 'scope', 'spoke'];

// for (const word of attempts) {
//   const result = checkWord(word, 'spoke');
//   console.log(result);
// }

type Candidate = {
  name: string;
  votes: Array<number>;
  funding: number;
};

const edward: Candidate = {
  name: 'Edward Underwood',
  votes: [192, 147, 186, 114, 267],
  funding: 58182890,
};

const rose: Candidate = {
  name: 'Rose Olson',
  votes: [48, 90, 12, 21, 13],
  funding: 78889263,
};

const leonard: Candidate = {
  name: 'Leonard Willis',
  votes: [206, 312, 121, 408, 382],
  funding: 36070689,
};

const nathaniel: Candidate = {
  name: 'Nathaniel Taylor',
  votes: [37, 21, 38, 39, 29],
  funding: 6317921937,
};

function totalVotes(votes: Array<number>): number {
  let total = 0;
  for (let i = 0; i < votes.length; i += 1) {
    total += votes[i];
  }
  return total;
}

function getVotePercent(totalvotes: number, candidateVotes: Array<number>): number {
  return (totalVotes(candidateVotes) / totalvotes) * 100;
}

function moneySpentPerVote(money: number, votes: Array<number>): number {
  return money / totalVotes(votes);
}

const candidates: Array<Candidate> = [edward, rose, leonard, nathaniel];
console.log(candidates);

let totalOverallVotes = 0;

for (let i = 0; i < candidates.length; i += 1) {
  totalOverallVotes += totalVotes(candidates[i].votes);
}

let candidateVotePercent = 0;

let highestPercent = 0;
let name1 = '';
let secondHighestPercent = 0;
let name2 = '';

for (let i = 0; i < candidates.length; i += 1) {
  console.log(`${candidates[i].name} has ${totalVotes(candidates[i].votes)} votes`);
  console.log(
    `This is ${getVotePercent(totalOverallVotes, candidates[i].votes).toFixed(2)}% of the votes`
  );
  console.log(
    `${candidates[i].name} spent $${moneySpentPerVote(
      candidates[i].funding,
      candidates[i].votes
    ).toFixed(2)} for each vote\n`
  );

  candidateVotePercent = getVotePercent(totalOverallVotes, candidates[i].votes);

  if (candidateVotePercent > highestPercent) {
    name1 = candidates[i].name;
    highestPercent = candidateVotePercent;
  } else if (candidateVotePercent < highestPercent && candidateVotePercent > secondHighestPercent) {
    name2 = candidates[i].name;
    secondHighestPercent = candidateVotePercent;
  }
}

if (highestPercent > 50) {
  console.log(
    `Candidate ${name1} has won the election with ${highestPercent.toFixed(2)}% of the votes`
  );
} else if (highestPercent === secondHighestPercent) {
  console.log(`There has been a tie between candidate ${name1} and candidate ${name2}`);
} else if (highestPercent < 50) {
  console.log(
    `The elections were very close, but candidate ${name1} won with ${highestPercent.toFixed(
      2
    )}% of the votes`
  );
}
