
function takeANumber(katzDeli, name ){
  katzDeli.push(name);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}



function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0 ){
    return("There is nobody waiting to be served!");
  } else {
    return ("Currently serving " + katzDeliLine.shift()+ ".");
  }
  
  
}



function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return("The line is currently empty.");
  }if (katzDeliLine.length>0){
    var finalList=("The line is currently:")
    for(let i = 0; i<katzDeliLine.length; i++){
      finalList+=` ${i+ 1}. ${katzDeliLine[i]},`
    
      
    } 
    
     return finalList.slice(0, -1);
    // return("The line is currently: " + katzDeliLine);
  }
 
  
}
