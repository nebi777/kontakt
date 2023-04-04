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
        ad: "Samsung Galaxy A14 (SM-A145) 4/64 GB Light Green",
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
        ad: "Pike takımı,nevresim seti Sarev Eva Bronte CK PT,Kırmızı",
        qiymet: 249.99,
        endirimqiymeti: 174.99
    },
]

const cardsContainer = document.qu  erySelector('.carditems');


karusel.forEach(function (item) {
    cardsContainer.innerHTML += `
    
    <div class="div-3">
    <div class="div-3-i">
        <a href="#"><i class="fa-solid fa-chevron-left"></i></a>
        <img src="${item.sekil}" alt="">
        <a href="#"><i class="fa-solid fa-chevron-right"></i></a>
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

const basket = []
function sebeteat(id) {
   const mehsuluAxtar = karusel.find(function(item) {
    if(item.id === id) {
        return item
    }
   })

   basket.push(mehsuluAxtar)
   console.log(basket);
}

