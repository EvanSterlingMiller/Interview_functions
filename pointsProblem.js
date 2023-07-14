function compareTriplets(a, b) {
    let aScore = 0
    let bScore = 0
    
    for (let i = 0; i < 3;  i++ ) {
        if (a[i] > b[i]) {
            aScore+=1
        } 
        if (b[i] > a[i]) {
            bScore+=1
        } 
    } return [aScore, bScore];
}
a = [1,2,3]
b = [3,4,1]
compareTriplets(a,b)

// for this problem the questing was asking that given a random set of numbers in an array of 3, whichver nuber was larger in the given index that array would be awarded a point. If the numbers were the same, no points would be awarded.