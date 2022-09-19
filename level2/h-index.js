function solution(citations) {
    const Max = Math.max(...citations)
    let answer = []
    if(Max===0){return 0}
    for(let i=1;i<=Max;i++){
        if(citations.filter(citation=>citation>=i).length>=i
        &&citations.filter(citation=>citation<i).length<=i){
            answer.push(i)
        }
    }
    return Math.max(...answer)
}