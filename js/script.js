let a = document.querySelector(".promo__genre")
a.innerHTML="Komedia"
let rek = document.querySelector(".promo__adv")
rek.remove()
let kino = document.querySelectorAll('.promo__interactive-item')
let ob = ['Maktab','Wednesday','Sensiz','Karib dengiz qaroqchilari','Terminator']
for (let i = 0; i < ob.length; i++) {
    kino[i].innerHTML=ob[i]
    kino[i].innerHTML=`${i+1}  `+kino[i].innerHTML+'<div class="delete"></div>'
}
let bg =document.querySelector('.promo__bg')
bg.style.backgroundImage=`url('img/1.jpg')`