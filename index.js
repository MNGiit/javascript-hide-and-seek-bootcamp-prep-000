function getFirstSelector(selector) {
  // My code will go here
  
  return document.querySelector(selector);
  
}

function nestedTarget(){
  // My code will go here
  
  var theNest = document.getElementById("nested").querySelectorAll(`target`);
  
  for (var i = 0; i < theNest.length; i++){
    
    theNest[i].innerHTML = ( i + 1 ).toString();
    
  }
  
  return theNest;
  
}

function increaseRankBy(n){
  // My code will go here
}

function deepestChild(){
  // My code will go here
}