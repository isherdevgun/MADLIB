'use strict';
// Create an event listener for buttonn click 
document.getElementById('button').addEventListener('click', setlib);
// Start a function
function setlib() {
    console.log('something')
    let verb = document.getElementById('verbing').value;
    let plNoun = document.getElementById('pl-noun').value;
    let adj = document.getElementById('adj').value;
    let ptVerb = document.getElementById('pt-verb').value;
    let noun = document.getElementById('noun').value;

    let result = 'There are too many ' + verb +' '+ plNoun + ' on this '+ adj + ' airplane!, I screamed. “Somebody has to '+ ptVerb + ' on the ' + noun +  ' to solve this problem!”';

    document.getElementById('answer').innerHTML= result;
}