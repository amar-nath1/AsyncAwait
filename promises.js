// Everything about Promises

console.log('Person1: show ticket')
console.log('Person2: show ticket')

const wifebringingtics=new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve('tickets')
    },3000)

})

const getPopcorn=wifebringingtics.then((t)=>{
    console.log('Wife: I am hungry')
    return new Promise((resolve,reject)=>{

        resolve('Popcorn, '+t)

    })
})

const getButter=getPopcorn.then((t)=>{
    console.log('Husband: here is Popcorn. lets go to movie.')
    console.log('Wife: Please take me some Butter')

    return new Promise((resolve,reject)=>{
        resolve('Butter '+t)
    })
})

const getColdrinks=getButter.then((t)=>{

    console.log('husband: we have '+t+" can we proceed to movie")
    console.log('wife: one last thing. Coldrinks Please')

    return new Promise((resolve,reject)=>{

        resolve('Coldrinks '+t)
    })
})

getColdrinks.then((t)=>{

console.log('Wife: finally we should move with '+t)
})

console.log('Person4: show ticket')
console.log('Person5: show ticket')