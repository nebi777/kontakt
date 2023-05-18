let karusel = [
    {
        id: 1,
        sekil: "https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-SBP-1105-SM-1521_45301d5574ddbfe0afb4887209d76121_w_png.webp",
        ad: "IPhone 13 512 GB starlight",
        qiymet: 3299.99,
        endirimqiymeti: 2449.99
    },
    {
        id: 2,
        sekil: "https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-SBP-1105-SM-2217_dee4fa30bbb55ffe8819e30598ff9bfb_w.jpg",
        ad: "Samsung Galaxy A14 (SM-A145) 4/64 GB Light",
        qiymet: 399.99,
        endirimqiymeti: 379.99
    },
    {
        id: 3,
        sekil: "https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-SBP-1105-SM-2103_ed3a3ef065b1aecce46f75eeb35045f9_w_png.webp",
        ad: "OPPO Reno 7 8/128 GB Sunset Orange",
        qiymet: 829.99,
        endirimqiymeti: 699.99
    },
    {
        id: 4,
        sekil: "https://kontakt.az/wp-content/uploads/gallery-tum/TM-TK-YTD-1143-PK-0122_70ecfb24a67fd06e2a540fde9c742a4f_w_png.webp",
        ad: "Pike takımı,nevresim seti Sarev Eva Bronte CK",
        qiymet: 249.99,
        endirimqiymeti: 174.99
    },
]

const cardsContainer = document.querySelector('.card-carousel');
const cardsCon = document.querySelector('.carditems');



karusel.forEach(function (item, index) {
    cardsContainer.innerHTML += `
    <div class="div-3" style="left:${index * 100}%">
        <div class="div-3-i">
            <img src="${item.sekil}" alt="">
        </div>
        <div class="div-3-t">
            <h1>${item.ad}</h1>
        </div>
        <div class="div-3-b">
            <div class="xett">
            <span><s>${item.qiymet}₼</s></span><br>
            <h1>${item.endirimqiymeti} ₼</h1>
            </div>
            <div>
            <button onclick="sebeteat(${item.id})">səbətə at</button>
            </div>
        </div>
    </div>
    `
})

let sag = document.querySelector(".sagox")
let sol = document.querySelector(".solox")
let saygac = 0
let div3 = document.querySelectorAll(".div-3")

sag.addEventListener("click", nextCarousel)
sol.addEventListener("click", previousCarousel)


function previousCarousel(){
    if (saygac == 0) {
        saygac = 3
        cardsContainer.style.transform = `translateX(-${saygac * 255}px)`
    } else {
        saygac--
        cardsContainer.style.transform = `translateX(-${saygac * 255}px)`
    }
};

function nextCarousel(){
    if (saygac == 3) {
        saygac = 0
        cardsContainer.style.transform = `translateX(-${saygac * 255}px)`
    } else {
        saygac++
        cardsContainer.style.transform = `translateX(-${saygac * 255}px)`
    }
}

let pauseInterval = setInterval(nextCarousel, 2000)

cardsCon.addEventListener("mouseenter", function(e){
    clearInterval(pauseInterval)
})
cardsCon.addEventListener("mouseleave", function(e){
   pauseInterval = setInterval(nextCarousel, 2000)
})


// sebete elave et

let basket = []
function sebeteat(id) {
    const basketiyoxla = basket.find(function(item) {
         if(item.id == id) {
            return item
         }
    })
    if(basketiyoxla) {
        alert("Basketde artiq bele mehsul var !")
    }else {
        document.querySelector('.popup').style.display = "flex"
        const mehsuluAxtar = karusel.find(function (item) {
            if (item.id === id) {
                return item
            }
        })
    
        basket.push(mehsuluAxtar)
        document.getElementById('counter').innerHTML = basket.length
        document.querySelector('.modal-body').innerHTML  = ''
        basket.forEach(function(item) {
            document.querySelector('.modal-body').innerHTML += `
             <div>
               <h1>${item.ad}</h1>
               <button onclick="sebetdensil('${item.id}')">sil</button>
             </div>
            `
        })
    }
   
}


function sebetdensil(id) {
    console.log(id);
   const filterbasket = basket.filter(function(item) {
        if(item.id != id) {
            return item
        }
    })
    basket = filterbasket
    if(basket.length == 0) {
        document.querySelector('.popup').style.display = "none"
    }
    document.getElementById('counter').innerHTML = basket.length
    document.querySelector('.modal-body').innerHTML  = ''
    basket.forEach(function(item) {
        document.querySelector('.modal-body').innerHTML += `
         <div>
           <h1>${item.ad}</h1>
           <button onclick="sebetdensil('${item.id}')">sil</button>
         </div>
        `
    })
    
}
document.querySelector('.modal-header button').addEventListener('click', function() {
    document.querySelector('.popup').style.display = "none"
})
