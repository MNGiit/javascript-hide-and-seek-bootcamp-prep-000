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
  
  var theRanks;
  theRanks = document.querySelector(`.ranked-list`);
  
  return (theRanks+n);
  
}

function deepestChild(){
  // My code will go here
  
  return document.querySelector('#grand-node div div div div');
  
}