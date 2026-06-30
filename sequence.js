function sequenceDigit(low, high){
    const result = []

    for (startDigit=1; startDigit <= 9; startDigit++){
        let num = startDigit;
        for(nextDigit=startDigit+1; nextDigit<=9; nextDigit++){
            num = (num * 10) + nextDigit;

             if(num >= low && num <= high){
            result.push(num)
        }
        }

       

    }

    return result.sort((a,b) => (a-b))
}

console.log(sequenceDigit(1000,13000))