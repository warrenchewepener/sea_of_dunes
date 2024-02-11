const prompt=require("prompt-sync")(); 

// Here I put in an input 


const sandy = prompt(`Have you ever wondered who built the Pyramids in Egypt?`);

// Here I bring in an If Else statement for responding to yes or no 


if (sandy === "yes")  {
  console.log(`\nhow great,theres a lot of tombs and Hyroglyphics in Pyramids`);
  
} 

else {
  console.log(`\nLet me take you on a trip on my carpet`); 

} 

// Another Input 

const camel = prompt(`\nwould you like to explore the Pyramids in Egypt on my carpet?`)

// If Else Statement

if (camel === "yes")  {
  console.log(`\nWonderful lets start`) 
  
}
 else{
  console.log(`\nok lets venture on my carpet anyway`)

}

hump = `\nplease choose a camel to ride on they each have names`
console.log(hump)

// Array

camel_names = ["Tony","Ben","Jupyter"];
console.log(camel_names[0]);
console.log(camel_names[1]);
console.log(camel_names[2]);

paper_wood = prompt(`Please select a camel from the names above`); 
console.log(paper_wood) 

// Another If Else Statement

if (paper_wood === "Tony")  {
    console.log(`\nTony is quite unique!`);
}

pebbles = `\nLets travel East our desination is at X `
console.log(pebbles)

// A function for the compass

function travelling_needle(compass) {
return compass * 2 ;

}
      
function travelling_needles(South,East)  {
      
const direction_one = travelling_needle(South);  
const direction_two = travelling_needle(East);
      
const point = `\nWe travell ${direction_one} degrees North and  ${direction_two} degrees East!`
      
return point;
}
      
console.log(travelling_needles(20,30));

    if (paper_wood == "Ben") {
      console.log("\nBen is an introvert!")
}  


    function travelling_needle_two(compass_two) {
    return compass_two * 2 ;
}
    
    function travelling_needle_two_again(min,max)  {
    
    const temperature_one = travelling_needle_two(min);  
    const temperature_two = travelling_needle_two(max);
    
    const magic = `\nThe maximum temperature in the desert is ${temperature_one} degrees and can
    \ndrop down to ${temperature_two} degrees Celsius!`
    
    return magic;
  }  
    
    console.log(travelling_needle_two_again(23,-5)); 
 
     
    if(paper_wood === "Jupyter")  {
      console.log(`Jupyter is an extrovert!`) 

}   
      function travelling_needle_three(compass_three) {
      return compass_three * 2 ;
}

      function travelling_needle_three_again(red)  {

      const wind_one = travelling_needle_three(red);  


      const magic_box = `\nThe wind in the desert can reach a maximum speed of  ${wind_one} miles / hour`

      return magic_box;
}  

      console.log(travelling_needle_three_again(25));         