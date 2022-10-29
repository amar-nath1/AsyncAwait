
console.log('Person1: show ticket')
console.log('Person2: show ticket')


const preMovie= async ()=>{

const wifebringingtics=new Promise((resolve,reject)=>{resolve('tickets')})

const getPopcorn=new Promise((resolve,reject)=>{resolve('Popcorn')})

const getButter=new Promise((resolve,reject)=>{resolve('Butter')})

const getColdrinks=new Promise((resolve,reject)=>{resolve('Coldrinks')})

let ticket=await wifebringingtics
console.log('Wife: here is '+ticket+' but please get me some Popcorn first')
let Popcorn =await getPopcorn
console.log('husband: here is '+Popcorn)
console.log('wife: ok. Now get me some Butter')

let Butter=await getButter
console.log('husband: here is '+Butter)
console.log('wife: ok. Now get me some Coldrinks')

let Coldrinks=await getColdrinks
console.log('husband: here is '+Coldrinks)
return ticket

}

preMovie().then((t)=>{

    console.log(t)
})

console.log('Person4: show ticket')
console.log('Person5: show ticket')
