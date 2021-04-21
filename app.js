var numberOne = [["firstArr", 20], ["secondArr", 13]];


function multiplyAll(arr) {
    var product = 1;
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);


var qThree = [ [ ['twenty', 8] , ['hello' , 40 ] , [ [32 , 'half'] , [ 'dog', 21456] ] , [ 'dinner time', 53 ] ] ]



function testGreaterThan(val) {
    if (val > 100) { 
      return "Over 100";
    }
  
    if (val > 10) {
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);


  

function questFour(a, b) {
    if (a === b) {
        return "This is True";
    }
        return "All Lies";
}

console.log (questFour(2,2));

console.log (questFour(5,2));