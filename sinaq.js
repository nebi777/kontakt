const sifaris = document.querySelectorAll(".elaveet")
const sebet = document.querySelector(".sebet")

let sebetim = []

sifaris.forEach(function (a) {
    a.addEventListener("click", function () {
        let mid = a.getAttribute("product-id")
        let sekil = a.parentElement.children[0].src
        let ad = a.parentElement.children[1].innerHTML
        let qiymet = a.parentElement.children[2].children[0].textContent


        sebet.innerHTML += `
        <div>
        
        <img width="200px" src="${sekil}">
        <p>${ad}</p>
        <span>${qiymet}</span>
        <button delete-product='${mid}' class="sil" onclick="sil('${mid}')">Sil</button>
        </div>
        `


        sebetim.push({ mehsulId:mid , mehsulAd: ad, mehsulSekli: sekil, mehsulQiymeti: qiymet })
        localStorage.setItem("sebet", JSON.stringify(sebetim))

    })
})

function sil(a) {
    const filterBasket = sebetim.filter(function(mehsul) {
        if(mehsul.mehsulId != a) {
            return mehsul
        }
    })
    sebetim = filterBasket
    localStorage.setItem('sebet', JSON.stringify(sebetim))
    sebet.innerHTML = ''
    
    sebetim.forEach(function(mehsul) {
        sebet.innerHTML +=   `<div>
    
        <img width="200px" src="${mehsul.mehsulSekli}">
        <p>${mehsul.mehsulAd}</p>
        <span>${mehsul.mehsulQiymeti}</span>
        <button delete-product='${mehsul.mehsulId}' class="sil" onclick="sil('${mehsul.mehsulId}')">Sil</button>
        </div>
        `
    })
}