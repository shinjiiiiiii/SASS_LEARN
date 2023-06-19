let random = Math.floor(Math.random() * 100)

 let acide = 0
 let foudre = 0
 let givre = 0

let queue_de_lez = Math.floor(Math.random() * 100)
let orr = Math.floor(Math.random() * 100)
let pet = Math.floor(Math.random() * 100)

let nuages = Math.floor(Math.random() * 100)
let pouss = Math.floor(Math.random() * 100)

let fio = Math.floor(Math.random() * 100)
let bav = Math.floor(Math.random() * 100)


for(let i = 0; queue_de_lez>3;i++){


    if(queue_de_lez>3 && orr >2 && pet>1){
        acide ++
        queue_de_lez -=3
        orr -=2
        pet -=1
    }

    queue_de_lez /=3 
    orr /=  2

    console.log(queue_de_lez , "queue");
    console.log(orr , "orr");
    console.log(pet , "pet");
    console.log(acide ,"acide");


}

for(let a = 0; nuages>2; a++){


    if(nuages>2 && pouss>1){
        foudre ++
        nuages -=2
        pouss -=1
    }

    nuages /= 2
    pouss /= 1

    console.log(nuages , "nuages");
    console.log(pouss , "pouss");
    console.log(foudre , "foudre");
}

for(let b = 0; fio>3;b++){
    

    if(fio>3 && bav>1){
        givre ++
        fio -= 3
        bav -=1
    }

    fio /=3

    console.log(fio);
    console.log(bav);
    console.log(givre);
}
