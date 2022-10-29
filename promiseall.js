
console.log('Person1: show ticket')
console.log('Person2: show ticket')


const preMovie= async ()=>{

const wifebringingtics=new Promise((resolve,reject)=>{resolve('tickets')})

const getPopcorn=new Promise((resolve,reject)=>{resolve('Popcorn')})

const getButter=new Promise((resolve,reject)=>{resolve('Butter')})

const getColdrinks=new Promise((resolve,reject)=>{resolve('Coldrinks')})

let ticket=await wifebringingtics
let [Popcorn,Butter,Coldrinks]=await Promise.all([getPopcorn,getButter,getColdrinks])

console.log(`${Popcorn}, ${Butter}, ${Coldrinks}`)

return ticket

}

preMovie().then((t)=>{

    console.log(t)
})

console.log('Person4: show ticket')
console.log('Person5: show ticket')
