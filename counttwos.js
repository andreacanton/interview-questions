var examples = [25, 36, 21, 4, 145, 261, 4213, 89, 200]


function stubbornCountTwo(number) {
  let counter = 0;
  for(let i = 0; i <= number; i++) {
    const digits = i.toString().split('');
    for(let j = 0; j < digits.length; j++){
      if(digits[j] === '2') {
        counter++;
      }
    }
  }
  return counter;
}

function cleverCountTwo(num, multiplier = 1, downNum = 0) {
  let counter = 0;
  const digits = num.toString().split('');
  const first = parseInt(digits[digits.length-1]);
  if(first > 2) {
    counter += 1 * multiplier;
  } else if(first === 2) {
    counter += downNum + 1
  }
  if(digits.length > 1) {
    const newDownNum = (parseInt(digits.splice(-1)) * multiplier) + downNum;
    upperNum = parseInt(digits.join(''));
    counter += upperNum * multiplier;
    counter += cleverCountTwo(upperNum, 10 * multiplier, newDownNum);
  }
  return counter;
}
// const num = 36;
// console.log(`${num} have ${stubbornCountTwo(num)} - clever ${cleverCountTwo(num)}`)

for(let i = 0; i < examples.length; i++) {
  const num = examples[i];
  console.log(`${num} have ${stubbornCountTwo(num)} - clever ${cleverCountTwo(num)}`)
}