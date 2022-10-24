 //given an array of elements generate a combination based-on it 

 const combinations = (elements)=>{
    if(elements.length == 0 ) return [[]]
    const firstEl = elements[0]
    const restEl = elements.slice(1)
    const combinationWithoutFirst = combinations(restEl)
    const combinationWithFirst = []
    combinationWithoutFirst.forEach(comb=>{
        // console.log('each comb=> ', comb)
        combinationWithFirst.push([...comb,firstEl])
    })

    return [...combinationWithFirst,...combinationWithoutFirst]
 }
//  o(nˆ2)
//  o(n)

 console.log(combinations([
    {
        type:'item',
        label:'item-1', 
        singleChoice: true, 
        default:false
    },
    {
        type:'item', 
        label:'item-2',
        singleChoice: true, 
        default:false
    },
    {
        type:'item', 
        label:'item3',
        singleChoice: true, 
        default:false
    },
    {
        type:'item', 
        label:'item4',
        singleChoice: true, 
        default:false
    },
    {
        type:'item', 
        label:'item5',
        singleChoice: true, 
        default:false
    },
]))
 
// console.log(combinations(['a','b','c']).filter(({length}) =>length>1))
//  console.log(combinations(['a','b','c']).filter(({length}) =>length>1))
 