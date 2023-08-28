const notunique = 'fasdfo';
const specialcase = 'asdfasdf';
const unique = 'asdfghjkl';
const another = 'asdfghjslk';

function hasUnique(s) {
  for(let i = 0; i < s.length; i++) {
    for(let j = i+1; j < s.length; j++) {
      if(s[i] == s[j]){
        return false
      }
    }
  }
  return true;
}

/* with data structure 
function hasUnique(s) {
  const checked = {};
  for (let i = 0; i < s.length; i++) {
    if(checked[s[i]]){
      return false;
    }
    checked[s[i]] = true;
  }
  return true;
}
*/
console.log(notunique, hasUnique(notunique));
console.log(unique, hasUnique(unique));
console.log(specialcase, hasUnique(specialcase));
console.log(another, hasUnique(another));