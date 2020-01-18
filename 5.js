//Bilangan Deret
const sequence = (x, y) => {
    if(x < y){
        console.log("Parameter x harus lebih besar dibanding y!");
    } else {
      	let data = [y];
        for(let n = 1; n < y; x++){
            y = Math.pow(y, 2) % x;
          	data.push(y); 
        }
      	console.log(data);
      	console.log(data.length);
    }
};


sequence(5,3);