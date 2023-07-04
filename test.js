const fruits= [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
]    

//No 1 print Andi's unique fruit
let uniqueFruit = []
fruits.forEach(item=>{
    if(uniqueFruit.includes(item.fruitName.toLowerCase())==false){
        uniqueFruit.push(item.fruitName.toLowerCase())
    }
})

console.log("No 1 Buah Andi:",uniqueFruit)

// No 2 wadah buah
let wadah = []
fruits.forEach((item)=>{
    const { fruitType } = item

    if(!wadah[fruitType]){
        wadah[fruitType] = []
    }

    wadah[fruitType].push(item)
})
console.log("No 2 Wadah:",wadah)

//No 3 Stock
let stock = []
for (const groupKey in wadah) {
    let stockCount=0
    wadah[groupKey].forEach((item)=>{
        stockCount+=item.stock
    })

    stock.push({
        type:groupKey,
        stock:stockCount
    })
}
console.log("No 3 Stock",stock)


//No 5 count total comments includeing nested comments
const comments = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                {
                    commentId: 111,
                    commentContent: 'Haai juga hai jugaa'
                },
                {
                    commentId: 112,
                    commentContent: 'Haai juga hai jugaa'
                }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]},
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
]

function countComment(comments){
    let  countCom = 0
    
    comments.forEach((item)=>{
        countCom++
        if(item.replies && item.replies.length>0){
            countCom+=countComment(item.replies)
        }
    })
    return countCom
}

const total = countComment(comments)
console.log("No 5 Total Comments = ",total)