const base   = 'asdf';
const perm1  = 'fasd';
const perm2  = 'sdaf';
const nperm  = 'qwer';
const nperm2 = 'ssdf';
const nperm3 = 'asdfasd';

function removeCharAt(s, i) {
   return s.slice(0,i) + s.slice(i+1);
}

function checkPermutation(s1, s2) {
  if(s1.length !== s2.length){
    return false;
  }
  for(let i = 0; i < s1.length; i++){
    for(let j = 0; j < s2.length; j++){
      if(s1[i] === s2[j]) {
        s2 = removeCharAt(s2,j);
      }
    }
  }
  return s2.length === 0;
}

console.log(base, perm1, checkPermutation(base, perm1));
console.log(base, perm2, checkPermutation(base, perm2));
console.log(base, nperm, checkPermutation(base, nperm));
console.log(base, nperm2, checkPermutation(base, nperm2));
console.log(base, nperm3, checkPermutation(base, nperm3));