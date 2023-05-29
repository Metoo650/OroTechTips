const navlist = document.querySelector(".navlist");
const menu = document.querySelector("#menu-icon");
const header = document.querySelector("header");
const posts = document.querySelector(".posts");
const closebtn = document.querySelector(".closebtn")
const shuffle = document.getElementById("shuffle");



randomPosts = ["style.css", "script.js", "index.html"]

shuffle.addEventListener("click", ()=>{
  let random = randomPosts[Math.floor(Math.random() * randomPosts.length)]
  location.href = random;
})


menu.addEventListener("click", () => {
  navlist.classList.toggle("menu-show");
  posts.classList.toggle("resp-posts")
  menu.classList.toggle("bx-x")
  menu.style.fontSize ="36px"
  posts.style.marginLeft = "5px"
})

window.onscroll = () => {
  navlist.classList.remove("menu-show");
  posts.classList.remove("resp-posts");
  menu.classList.remove("bx-x")
}

var options = {
  strings: ['<a style="color: lime; font-size: 17px; font-weight: 400; margin-top: 7px; margin-left: 27px;" href="style.css">ChatGPT: The Chatbot which can......</a>','<a style="color: lime; font-size: 17px; font-weight: 400; margin-top: 7px; margin-left: 27px;" href="style.css">ChatGPT: The Chatbot which can......</a>'],
  typeSpeed: 200,
  backSpeed: 100,
  loop: true
};

var typed = new Typed('#anime', options);
