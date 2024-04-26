let baaner = document.querySelector('.image-container')
let svg1 = document.querySelector('#Layer_1')
let svg2 = document.querySelector('#Layer_2')
let counter =0;
svg2.addEventListener('click',()=>{
    console.log("left");
    console.log(counter);
    if (counter<0) {
        counter=0
        slide()
    }
    else{
        counter--
        slide()
     }
})
svg1.addEventListener('click',()=>{
    console.log("riht");
    console.log(counter);
    if (counter>3) {
        counter=0
        slide()
    }
    else{
        counter++
        slide()
    }
})
function slide(){
    baaner.style.transition=`all 1s`
    baaner.style.transform=`translateX(-${counter*100}%)`
}
setInterval(()=>{
    if (counter>3) {
        counter=0
        slide()
    }
    else{
        counter++
        slide()
    }
},3000)
