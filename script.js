// var titles = document.getElementsByClassName("title")
// // for (let i =0; titles.length; i++) {
// //     console.log(titles[i])
// // }
// console.log(Array.isArray(Array.from(titles)))
// let newTitles = Array.from(titles);
// // console.log(titles)
// newTitles.forEach((item)=> {
// // console.log(item)
// })  

// var wrapper = document.querySelector("#wrapper")
// // console.log(wrapper) 

// const wrapLi =  document.querySelector("#book-list li .name")
// console.log(wrapLi)
// const all = document.querySelectorAll("#book-list li .name")
// console.log(all)
// const arryaFromAll = Array.from(all)
// arryaFromAll.forEach(item => {
//     console.log(item.textContent)
//     item.textContent += "test"
// })
// HTML collections and NodeLists are NOT an array !!!
// const wrapLi1 =  document.querySelector("#book-list")
// console.log(wrapLi1.innerHTML)
// console.log(wrapLi1.textContent)
// wrapLi1.innerHTML += '<p> this is a paragraph....</p>'
// console.log(banner)
// console.log("banner node type", banner.hasChildNodes())
// console.log(banner.cloneNode(true))

// const wrapLi1 =  document.querySelector("#book-list")
// console.log("  parent  ",wrapLi1.parentElement.parentElement)
// console.log(" cildren ",wrapLi1.children)
// console.log(wrapLi1)
// console.log(" next sibling ",wrapLi1.nextElementSibling)
// console.log(" previous sibling ",wrapLi1.previousElementSibling)

var h2 = document.querySelector("#book-list h2")
h2.addEventListener("click",(e)=> {
console.log(e.target)
e.preventDefault()
})

h2.style.color = "red"
h2.style.marginTop = "100px"
