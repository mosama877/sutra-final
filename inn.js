const caa = document.querySelector(".caa")
const loc = JSON.parse(localStorage.getItem("kok"))
console.log(loc);
caa.src = loc[0].src
const open = document.querySelector(".open")
const cartt = document.querySelector(".cart")
const bak = document.querySelector(".bls4")
const close = document.querySelector(".close")
const em = loc[0]

const coco = document.querySelector(".header")
const owp = document.querySelector(".opw")
const clos = document.querySelector(".cee")

owp.addEventListener("click", function (e) {
    e.preventDefault()
    coco.classList.add("k")
})
clos.addEventListener("click", function (e) {
    e.preventDefault()
    coco.classList.remove("k")
})

const cart = JSON.parse(localStorage.getItem("cart")) ?? [];
open.addEventListener("click", function (e) {
    e.preventDefault()
    bak.classList.add("k")
    cartt.classList.add("k")
})
close.addEventListener("click", function (e) {
    e.preventDefault()
    bak.classList.remove("k")
    cartt.classList.remove("k")
})
const cartca = document.querySelector(".cart-card")
cart.forEach(function (e) {
    cartca.innerHTML += `<div class="cardcor">
    <div class="car-img" style="  height: 100% ;">
        <img src="${e.src}" alt="" class="w-100">
    </div>
    <div class="car-text">
        <a href="#" class="dflex" style="color: black; text-decoration: none;"><p> ${e.title}</p></a>
        <p style="font-size: small;">${e.color} / ${e.size}</p>
        <p style="color:  rgb(99, 101, 102);font-size: medium;">${e.price}</p>
        <div class="d-flex  col-11" style=" border: #1c2939 1px solid;border-radius: 25px ; order: 1; ">
                        <button class="btn btn-link px-2" style="width: 30%;color: #1c2939; ;" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                            <i class="fas fa-minus"></i>
                        </button>
    
                        <input id="form1" min="0" name="quantity" value="1" type="number" class="" style="width: 30%; border: 0 !important; outline: 0 !important; text-align: center;" >
    
                        <button class="btn btn-link px-2" style="color: #1c2939;width: 30%;" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
    </div>
</div>`
})

const kij = document.querySelector(".made")
const kain = document.querySelectorAll(".swatch__item")
kain.forEach(function(en){
    en.addEventListener("click" ,function(klc){
        klc.preventDefault()
        kij.textContent = en.textContent
        removeAcc ()
        en.classList.add("acc")
        
    })
})
function removeAcc (){
    kain.forEach(function(en){
        en.classList.remove("acc")
    })
}


const cotitle = document.querySelector(".co-title")
const coprice = document.querySelector(".co-price")
const cokind = document.querySelector(".co-kind")
const cocolor = document.querySelector(".co-color")
console.log(coprice);
console.log(cokind);
console.log(cocolor);
console.log(em);

cotitle.textContent = loc[0].title
coprice.textContent = loc[0].price
cokind.textContent = loc[0].kind
cocolor.textContent = loc[0].color

const cars = document.querySelectorAll(".cass")


const gah =document.getElementById("form1")
const caka = document.querySelector(".caka")
const kae = gah.addEventListener("input", function(){
    return gah.value
})
console.log(kae);
caka.addEventListener("click", function (klc) {
    klc.preventDefault()
    const id = loc[0].id
    const bj = loc[0]
    const csrtr = cart.find(product => product.id == id)
    if (bj !== undefined) {
        if (csrtr == undefined) {
            const ksa = { ...bj, size : kij.textContent }
            cart.push({ ...ksa,  quant : kae })
        }
        else {
            csrtr.size = kij.textContent 
            csrtr.quant += kae
        }
        localStorage.setItem("cart", JSON.stringify(cart))

    }
        
    })


const lovi = JSON.parse(localStorage.getItem("lovi")) ?? [];


const lovebtn = document.querySelector(".loka")


        lovebtn.addEventListener("click", function (klc) {
            klc.preventDefault()
            const pare = em
            const id = pare.id
            console.log(id);
            const bj = loc[0]
            console.log(bj);
            const csrtr = lovi.find(product => product.id == id)
            
                if (csrtr == undefined) {
                    lovi.push(bj)
                    lovebtn.classList.add("loving")
                }
                else{
                    window.open("love.html", "_self")
                }
                localStorage.setItem("lovi", JSON.stringify(lovi))
                
        })
        const pare = em
        const id = pare.id
            console.log(id);
            const bj = loc[0]
            console.log(bj);
            const csrtr = lovi.find(product => product.id == id)
            if (csrtr !== undefined){
                lovebtn.classList.add("loving")
            }

