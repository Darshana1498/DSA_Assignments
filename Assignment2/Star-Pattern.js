function printStarPattern(rows){
    for(let i = 1 ;i <=rows; i++){
        let stars = "";
        for(let j = 1; j<= i; j++){
            stars += "* ";
        }
       
        console.log(stars);
    }

}
 const numberOfRows = 3;
 printStarPattern(numberOfRows);
