
const tring = [
    {
        "kay": "tring",
        "id": 1,
        "src": "./assets/images/315A6029.webp",
        "title": "ترينج سترة - ازرق",
        "price": "LE 679.00",
        "kind": "ترينج",
        "color": "ازرق"

    },
    {
        "kay": "tring",
        "id": 2,
        "src": "./assets/images/315A7741.webp",
        "title": "ترينج سترة - اسود",
        "price": "LE 999.00",
        "kind": "ترينج",
        "color": "اسود"
    },
    {
        "kay": "tring",
        "id": 3,
        "src": "./assets/images/315A7744.webp",
        "title": "ترينج سترة - بيج",
        "price": "LE 399.00",
        "kind": "ترينج",
        "color": "بيج"
    },
    {
        "kay": "tring",
        "id": 4,
        "src": "./assets/images/315A7754.jpg",
        "title": "ترينج سترة - زيتي",
        "price": "LE 499.00",
        "kind": "ترينج",
        "color": "زيتي"
    },
    {
        "kay": "tring",
        "id": 5,
        "src": "./assets/images/315A7756.jpg",
        "title": "ترينج سترة - ابيض",
        "price": "LE 679.00",
        "kind": "ترينج",
        "color": "ابيض"

    },
    {
        "kay": "best",
        "id": 6,
        "src": "./assets/images/3tor satra.webp",
        "title": "عطور سترة المميزة",
        "price": "LE 599.00",
        "kind": "عطر",
        "color": "شفاف"
    },
    {
        "kay": "best",
        "id": 7,
        "src": "./assets/images/kamis aswd.webp",
        "title": "قميص اسود",
        "price": "LE 649.00",
        "kind": "قميص",
        "color": "ازرق"
    },
    {
        "kay": "best",
        "id": 8,
        "src": "./assets/images/teshirt sada bugg.webp",
        "title": "تيشرت سادة بيج",
        "price": "LE 199.00",
        "kind": "تيشرت",
        "color": "بيج"
    },
    {
        "kay": "best",
        "id": 9,
        "src": "./assets/images/teshirt over size lonen.webp",
        "title": "تيشرت اوفر سايز لونين",
        "price": "LE 349.00",
        "kind": "تيشرت",
        "color": "ابيض و اسود"
    },
    {
        "kay": "best",
        "id": 10,
        "src": "./assets/images/teshirt over size  mo5tt abyd w.webp",
        "title": "تيشرت اوفر سايز مخطط ",
        "price": "LE 349.00",
        "kind": "تيشرت",
        "color": "مخطط"
    },
    {
        "kay": "tring",
        "id": 11,
        "src": "assets/images/تيشرت سترة اوفر سا اخضر فاتح.webp",
        "title": "تيشيرت Stay Unique تلبيس اوفر سايز - أخضر فاتح",
        "price": "LE 349.00",
        "kind": "تيشرت",
        "color": "أخضر فاتح"
    },
    {
        "kay": "tring",
        "id": 12,
        "src": "assets/images/تيشرت سترة sutreaest اوفر سايز.webp",
        "title": "تيشيرت SUTRA EST تلبيس اوفر سايز - أزرق غامق",
        "price": "LE 349.00",
        "kind": "تيشيرت",
        "color": "أزرق غامق"
    },
    {
        "kay": "tring",
        "id": 13,
        "src": "assets/images/تيشرت بولو بسوسته تلبيس  .webp",
        "title": "تيشيرت بولو بسوستة - أحمر",
        "price": "LE 419.00",
        "kind": "تيشيرت",
        "color": "أحمر"
    },
    {
        "kay": "best",
        "id": 14,
        "src": "./assets/images/11111111.webp",
        "title": "شراب قطن كعب",
        "price": "LE 38.00",
        "kind": "شرابات",
        "color": "رمادى"
    },
    {
        "kay": "best",
        "id": 15,
        "src": "./assets/images/33.webp",
        "title": "محفظة رجالي جلد بتصميم رفيع - اسود",
        "price": "LE 249.00",
        "kind": "محفظة",
        "color": "اسود"
    },
    {
        "kay": "best",
        "id": 16,
        "src": "./assets/images/Over_Size_PR-Do_not_Surrender_Beige-M_1.webp",
        "title":"  تيشيرت مطبوع بيج",
        "price": "LE 349.00 ",
        "kind": "تيشيرت",
        "color": " بيج"
    },
    {
        "kay": "tring",
        "id": 60,
        "src": "./assets/images/315A7735_1_0d62bc2f-3be8-4f6c-bec3-247d86cceccb.webp",
        "title": "ترينج سترة - ازرق فاتح",
        "price": "LE 679.00",
        "kind": "ترينج",
        "color": "ازرق فاتح"
    }
]
document.addEventListener('DOMContentLoaded', function () {

    new Splide('.moba', {
        direction: 'rtl',
        paginationDirection: 'rtl',
        arrows: true,
        pagination: false,
        perPage: 2,
        type: "",
        perMove: 1,
        autoplay: false,
        interval: 3000,
        speed: 800,
    }).mount();
})
document.addEventListener('DOMContentLoaded', function () {

    new Splide('.goma', {
        direction: 'rtl',
        paginationDirection: 'rtl',
        arrows: true,
        pagination: false,
        perPage: 1,
        type: "",
        perMove: 1,
        autoplay: false,
        interval: 3000,
        speed: 800,
    }).mount();
})
const lob = +window.innerWidth
const max = +1024
const mav = +768
if (lob >= max){
    document.addEventListener('DOMContentLoaded', function () {
        
        new Splide('.mok', {
            direction: 'rtl',
            paginationDirection: 'rtl',
            arrows: true,
            pagination: false,
            perPage: 5,
            type: "",
            perMove: 1,
            autoplay: false,
            interval: 3000,
            speed: 800,
        }).mount();
    })
}

else if(lob >= mav){
    document.addEventListener('DOMContentLoaded', function () {
        
        new Splide('.mok', {
            direction: 'rtl',
            paginationDirection: 'rtl',
            arrows: true,
            pagination: false,
            perPage: 4,
            type: "",
            perMove: 1,
            autoplay: false,
            interval: 3000,
            speed: 800,
        }).mount();
    })
}
else{
    document.addEventListener('DOMContentLoaded', function () {
        
        new Splide('.mok', {
            direction: 'rtl',
            paginationDirection: 'rtl',
            arrows: true,
            pagination: false,
            perPage: 2,
            type: "",
            perMove: 1,
            autoplay: false,
            interval: 3000,
            speed: 800,
        }).mount();
    })
}
if (lob >= max){
    document.addEventListener('DOMContentLoaded', function () {
        new Splide('.lok', {
            direction: 'rtl',
            paginationDirection: 'rtl',
            arrows: true,
            pagination: false,
            perPage: 5,
            type: "",
            perMove: 1,
            autoplay: false,
            interval: 3000,
            speed: 800,
        }).mount();
    })
}

else if(lob >= mav){
    document.addEventListener('DOMContentLoaded', function () {
        new Splide('.lok', {
            direction: 'rtl',
            paginationDirection: 'rtl',
            arrows: true,
            pagination: false,
            perPage: 4,
            type: "",
            perMove: 1,
            autoplay: false,
            interval: 3000,
            speed: 800,
        }).mount();
    })
}
else{
    document.addEventListener('DOMContentLoaded', function () {
        new Splide('.lok', {
            direction: 'rtl',
            paginationDirection: 'rtl',
            arrows: true,
            pagination: false,
            perPage: 2,
            type: "",
            perMove: 1,
            autoplay: false,
            interval: 3000,
            speed: 800,
        }).mount();
    })
}
// window.addEventListener('scroll' ,function(){
//     const lob = +window.innerWidth
//     const max = +1024
//     console.log(lob);
//     if (lob >= max){
//     console.log("fff");
//     document.addEventListener('DOMContentLoaded', function () {
//         new Splide('.splide', {
//             direction: 'rtl',
//             paginationDirection: 'rtl',
//             arrows: true,
//             pagination: false,
//             perPage: 5,
//             type: "",
//             perMove: 1,
//             autoplay: false,
//             interval: 3000,
//             speed: 800,
//         }).mount();
//     })
// }

// else if(lob >= mav){
//     document.addEventListener('DOMContentLoaded', function () {
//         new Splide('.splide', {
//             direction: 'rtl',
//             paginationDirection: 'rtl',
//             arrows: true,
//             pagination: false,
//             perPage: 4,
//             type: "",
//             perMove: 1,
//             autoplay: false,
//             interval: 3000,
//             speed: 800,
//         }).mount();
//     })
// }
// })






const lsOne = document.querySelector(".ls-1")
const lsTwo = document.querySelector(".fac")
const kow = document.querySelector(".kok")
pase(lsOne, "tring")
pase(kow, "best")


function pase(pees, kek) {
    tring.forEach(function (item) {
        if (item.kay == kek) {
            pees.innerHTML +=
                `
            <li class="splide__slide">
                        <a href="#" >
            
                            <div class="product-em" data-id="${item.id}  ">
                                <div class="product ">
                                    <div class="product-img " style=" overflow: hidden; height: 70% ;" >
                                        <img src="${item.src}" alt="" class="w-100 h-100" >
                                        <a href="#">
                                            <div class="blsch bvb" >
                                                
                                            </div>
                                            <div class="evg" >
                                            <a href="#" class="see"  data-id ="${item.id}">
                                                <div class="soci">
                                                <i class="fas fa-eye"></i>
                                                </div>
                                                
                                            </a>
                                            <a href="#" class="bvb">
                                                <div class="soci" >
                                                <i class="fas fa-cart-shopping"></i>
                                                </div>
                                            </a>
                                            <a href="#" class="love">
                                                <div class="soci loka">
                                                <i class="fas fa-heart"></i>
                                                
                                                </div>
                                            </a>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="product-ase w-100  d-flex flex-column">
                                        <a href="#"  style="color: #4f4f4f; text-decoration: none; margin: 10px 0px;" class="bvb"> SUTRA</a>
                                        <a href="#" style="text-decoration: none ;color: #000;;" class="bvb">${item.title}</a>
                                        <a href="#" style="color: #4f4f4f; text-decoration: none;" class="bvb">${item.price}</a>
                                    </div>
                                </div>
                            </div>
                            
                        </a>
                    </li>`
        }
    })


}

const see = document.querySelectorAll(".see")
const watsh = document.querySelector(".eye")
const baka = document.querySelector(".eye-backgroun")
sees()

function sees() {
    see.forEach(function (em) {
        em.addEventListener("click", function (klc) {
            klc.preventDefault()
            const id = em.dataset.id
            const bj = tring.find(product => product.id == id)
                const ad = em.dataset.id
                if (ad == bj.id){
                    const sog = document.querySelector(".sog")
                    sog.src = bj.src
                    const tit = document.querySelector(".tit")
                    tit.textContent = bj.title
                    const pri =document.querySelector(".pri")
                    pri.textContent = bj.price
                    const cole = document.querySelector(".cole")
                    cole.textContent = bj.color
                    const eye = document.querySelector(".eye")
                    eye.dataset.id = bj.id
                    console.log(eye.dataset.id);
                    const par = lovebtn.closest(".eye")
        const ik = par.dataset.id
        console.log(ik);
        const csrtr = lovi.find(product => product.id == ik)
            if (csrtr !== undefined){
                lovebtn.classList.add("loving")
            }
            else{
                lovebtn.classList.remove("loving")
            }
                    watsh.classList.add("k")
                    baka.classList.add("k")
                }
                baka.addEventListener("click" ,function(){
                    baka.classList.remove("k")
                    watsh.classList.remove("k")
                })
                
            })
            
        })
    }
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

    const gah =document.getElementById("form1")
    console.log(gah);
    const caka = document.querySelector(".caka")
    const kae = gah.textContent
    console.log(kae);
    caka.addEventListener("click", function (klc) {
        klc.preventDefault()
        const id = caka.closest(".eye").dataset.id
        const bj = tring.find(product => product.id == id)
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
    


const cart = JSON.parse(localStorage.getItem("cart")) ?? [];


const cars = document.querySelectorAll(".cass")



cars.forEach(function (e) {
    e.addEventListener("click", function (klc) {
        klc.preventDefault()
        const pare = e.closest(".product-em")
        const id = pare.dataset.id
        const bj = tring.find(product => product.id == id)
        const csrtr = cart.find(product => product.id == id)
        if (bj !== undefined) {
            if (csrtr == undefined) {
                cart.push({ ...bj, quant: 1 })
            }
            else {
                csrtr.quant++
            }
            localStorage.setItem("cart", JSON.stringify(cart))

        }

    })
})

const lovi = JSON.parse(localStorage.getItem("lovi")) ?? [];


const lovebtns = document.querySelectorAll(".loka")



lovebtns.forEach(function (e) {
    const pare = e.closest(".product-em")
        const id = pare.dataset.id
        const csrtr = lovi.find(product => product.id == id)
    if (csrtr !== undefined){
        e.classList.add("loving")
    }
    e.addEventListener("click", function (klc) {
        klc.preventDefault()
        const pare = e.closest(".product-em")
        const id = pare.dataset.id
        const bj = tring.find(product => product.id == id)
        const csrtr = lovi.find(product => product.id == id)
        
            if (csrtr == undefined) {
                lovi.push(bj)
                e.classList.add("loving")
            }
            else{
                window.open("love.html", "_self")
                
            }

            localStorage.setItem("lovi", JSON.stringify(lovi))
            
    })
    
})
const lovebtn = document.querySelector(".lokk")

        
        lovebtn.addEventListener("click", function (klc) {
            klc.preventDefault()
            const par = lovebtn.closest(".eye")
        const ik = par.dataset.id
        const bj = tring.find(product => product.id == ik)
        const csrt = lovi.find(product => product.id == ik)
            
                if (csrt == undefined) {
                    lovi.push(bj)
                    lovebtn.classList.add("loving")
                }
                else{
                    window.open("love.html", "_self")
                }
                localStorage.setItem("lovi", JSON.stringify(lovi))
                
        })
        











const open = document.querySelector(".open")
const cartt = document.querySelector(".cart")
const bak = document.querySelector(".bls4")
const close = document.querySelector(".close")
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
    
                        <input id="form1" min="0" name="quantity" value="${e.quant}" type="number" class="" style="width: 30%; border: 0 !important; outline: 0 !important; text-align: center;" >
    
                        <button class="btn btn-link px-2" style="color: #1c2939;width: 30%;" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
    </div>
</div>`
})
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
const tasks = []
const productEm = document.querySelectorAll(".bvb")

buy(tring)


function buy(obj) {
    productEm.forEach(function (em) {
        em.addEventListener("click", function (klc) {
            klc.preventDefault()
            const id = em.closest(".product-em").dataset.id
            const bj = obj.find(product => product.id == id)
            const csrtr = tasks.find(product => product.id == id)
            if (bj !== undefined) {
                if (csrtr == undefined) {
                    tasks.push(bj)
                }
            }
            localStorage.setItem("kok", JSON.stringify(tasks));
            let lclstrg = JSON.parse(localStorage.getItem("kok"))
            let newdata = lclstrg.filter(function (item) {
                if (item.id == bj.id) {
                    return item
                }
            })
            localStorage.setItem("kok", JSON.stringify(newdata))
            window.open("acc.html", "_self")
        })
    })
}

// const see = document.querySelectorAll(".see")
// const watsh = document.querySelectorAll(".eye")
// const baka = document.querySelector(".eye-backgroun")
// console.log(watsh);

// sees(tring)

// function sees(obj) {
//     see.forEach(function (em) {
//         em.addEventListener("click", function (klc) {
//             klc.preventDefault()
//             const id = em.dataset.id
//             const bj = obj.find(product => product.id == id)
//             watsh.forEach(function(gg){
//                 const ad = gg.dataset.id
//                 const jj = gg
//                 if (ad == bj.id){
//                     gg.classList.add("k")
//                     baka.classList.add("k")
                    
//                 }
//                 baka.addEventListener("click" ,function(){
//                     baka.classList.remove("k")
//                     jj.classList.remove("k")
//                 })
                
//             })
            
            
            
            
//         })
//     })
// }

