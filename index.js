function getFirstSelector(selector) {
  // My code will go here
  
  return document.querySelector(selector);
  
}

function nestedTarget(){
  // My code will go here
  
  return document.querySelector('#nested .target');
  
}

function increaseRankBy(n){
  // My code will go here
  
  var theRanks = document.querySelectorAll(`ul.ranked-list li`);
  
  for (var i = 0; i < theRanks.length; i++){
    
    theRanks[i].innerHTML = parseInt(theRanks[i].innerHTML) + n;
    
  }
  
  return theRanks;
  
}

function deepestChild(){
  // My code will go here
  
  return document.querySelector('#grand-node div div div div');
  
}