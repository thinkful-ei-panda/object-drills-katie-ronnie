
let loaf = {
    flour: 300,
    water: 210,
    hydration(){
        return (this.water/this.flour) * 100
    }
};

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());


let idc = {
    foo: 4,
    bar: 'blue',
    fum: 'cat',
    quux: true,
    spam: 23
   
};

for (let loop in idc) {
    console.log(`${loop}: ${idc[loop]}`);
  }


let idk = {
   meals: ['breakfast', 
   'second breakfast', 
   'elevenses', 
   'lunch', 
   'afternoon tea', 
   'dinner', 
   'supper'],
};

console.log(idk.meals[3]);


let people = [
    {
    name: 'jim',
    jobTitle: 'comedian',
    },
    {
    name: 'pam',
    jobTitle: 'secretary',
    },
    {
    name: "andy",
    jobTitle: 'boss',
    },    
];
//people.forEach(element => element['boss'] = 'andy')
people.forEach(element => { 
    if (element.name === 'andy'){
        element['boss'] = "pam";}
    if (element.name === 'jim'){
        element['boss'] = 'andy';}
    if (element.name === 'pam'){
        element['boss'] = 'none';
    }  
});

people.forEach(element => {
    if (element.boss === "none"){
      console.log(`${element.jobTitle} ${element.name} doesn't report to anybody.`);
    }else {
      console.log(`${element.jobTitle} ${element.name} reports to ${element.boss}`);
    }
})

function decode(str){
    if (str[0] === 'a'){
        return str[1];
    }else if
    (str[0] === 'b'){
        return str[2];
    }else if 
    (str[0] === 'c'){
        return str[3];
    } else if 
    (str[0] === 'd'){
        return str[4];
    } else {
        return " ";
    }
};

function decodeWords(str){
   let codeWords = str.filter(function(str){
       return decode(str)
   })
}

