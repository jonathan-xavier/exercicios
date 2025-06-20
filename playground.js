const data = [
    {
        "name": "1",
        "peakOfUsers": 4699
    },
    {
        "name": "2",
        "peakOfUsers": 9042
    },
    {
        "name": "3",
        "peakOfUsers": 5627
    },
    {
        "name": "4",
        "peakOfUsers": 7424
    },
    {
        "name": "5",
        "peakOfUsers": 4258
    },
    {
        "name": "6",
        "peakOfUsers": 3460
    },
    {
        "name": "7",
        "peakOfUsers": 5633
    },
    {
        "name": "8",
        "peakOfUsers": 4724
    },
    {
        "name": "9",
        "peakOfUsers": 6234
    },
    {
        "name": "10",
        "peakOfUsers": 1839
    },
    {
        "name": "11",
        "peakOfUsers": 496
    },
    {
        "name": "12",
        "peakOfUsers": 2321
    },
    {
        "name": "13",
        "peakOfUsers": 3545
    },
    {
        "name": "14",
        "peakOfUsers": 8146
    },
    {
        "name": "15",
        "peakOfUsers": 1198
    },
    {
        "name": "16",
        "peakOfUsers": 9228
    },
    {
        "name": "17",
        "peakOfUsers": 926
    },
    {
        "name": "18",
        "peakOfUsers": 1086
    },
    {
        "name": "19",
        "peakOfUsers": 9497
    },
    {
        "name": "20",
        "peakOfUsers": 978
    },
    {
        "name": "21",
        "peakOfUsers": 8173
    },
    {
        "name": "22",
        "peakOfUsers": 2648
    },
    {
        "name": "23",
        "peakOfUsers": 28
    },
    {
        "name": "24",
        "peakOfUsers": 4060
    },
    {
        "name": "25",
        "peakOfUsers": 4070
    },
    {
        "name": "26",
        "peakOfUsers": 8371
    },
    {
        "name": "27",
        "peakOfUsers": 5978
    },
    {
        "name": "28",
        "peakOfUsers": 8301
    },
    {
        "name": "29",
        "peakOfUsers": 3557
    },
    {
        "name": "30",
        "peakOfUsers": 630
    },
    {
        "name": "31",
        "peakOfUsers": 6943
    }
]

const getExcendentUsersCount = () => {
    const totalLicenses = 8600
    
    // return data.reduce((acc, curr) => {
    //     if(curr.peakOfUsers > totalLicenses){
    //         return acc[acc]
    //     }
    //     return acc
    // }, {})
        const newData = data.map(item => item.peakOfUsers)
        let theBiggest = 0
        let arr = []
        newData.forEach((item, index) => {
            
            let biggest
            if(item > totalLicenses){
               arr.push(newData[index])
               arr.sort((itemA, itemB) => itemA - itemB) 

               biggest = arr.reduce((acc, curr) => {
                     if(acc > curr){
                        return curr
                     } 
                      return acc
               })
               theBiggest = biggest
            }
        })
        // return theBiggest
        const maxPeakOfUsers = data.reduce((prev, curr) => Math.max(prev, curr.peakOfUsers), 0);
        return Math.abs(Math.min(totalLicenses - maxPeakOfUsers, 0))

     
        
}

const getTheBiggestExcedent2 = () => {
    const totalLicenses = 8600;
  
    return Math.max(
      ...data
        .map(d => d.peakOfUsers)
        .filter(p => p > totalLicenses),0
    );
  };

// console.log(getTheBiggestExcedent2())
let randomNumber = (-1)
// console.log(+randomNumber)



const itens = [
    {description: "pen", quantity: 1, price: 3},
    {description: "rule", quantity: 2, price: 5},
    {description: "erase", quantity: 2, price: 6}
]

const result = itens.reduce((prev, curr) => {
    return prev + (curr.quantity * curr.price)
},0)

const names = ["Daniel", "Maria", "Marta", "Juca", "João", "Jéssica"]

const namesCount = names.reduce((prev, curr) => {
    let initial = curr.substring(0,1)
    prev[initial.toLowerCase()] = (prev[initial.toLowerCase()] ?? 0) + 1
    
    return prev
    // return {
    //     ...prev,
    //     [initial]: (prev[initial.toLowerCase()] ?? 0) + 1
    // }

}, {})    



//esperado 
//namesCount = {d:1, m: 2, j:3}

const people = [
    {name: "Daniel", idade: 28 },
    {name: "Maria", idade: 29 },
    {name: "Marta", idade: 29 },
]

const CountNames = people.reduce((prev, curr) => {
    let repeat = []
    repeat.push(curr.idade)

    let names = []
    let hasRepeat = repeat.filter((item, index, self) => {
        return self.indexOf(item) !== index
    })
    

    if(hasRepeat){
        names.push(curr.name)
        prev[curr.idade] =  [
            ...(prev[curr.idade] || []),
            curr.name,
        ]
    }else {
        prev[curr.idade] = [...names]
    }
    return prev
    
}, {})

const resultguabi =people.reduce((prev, {name, idade}) => {
    return {
         ...prev,
        [idade]: (prev[idade] || []).concat(name),
    }
}, {})

    console.log(resultguabi);
    

    
//resultado esperado
// { "28": ["Daniel"], "29": ["Maria", "Marta"]}