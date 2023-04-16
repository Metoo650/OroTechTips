const navlist = document.querySelector(".navlist");
const menu = document.querySelector("#menu-icon");
const header = document.querySelector("header");
const posts = document.querySelector(".posts");
const closebtn = document.querySelector(".closebtn")
const shuffle = document.getElementById("shuffle");

const data = [
  {
    img: "images/avenue.jpg",
    title: `<a href='https://www.google.com'> ChatGPT: </a>Asking Questions Platform!`,
    date: `7/8/2023`,
    admin: "Owner",
    desc: "it is the chatbot released in 2023 and developed by OpenAI Company! in addition, Its powerful! what meant by this is it can answer different Questions! To check it out, press the  button below",
    link: "gpt.html",
  },
  {
    img: "images/avenue.jpg",
    title: `<a href='https://www.google.com'> ChatGPT: </a>Asking Questions Platform!`,
    date: `7/8/2023`,
    admin: "Owner",
    desc: "it is the chatbot released in 2023 and developed by OpenAI Company! in addition, Its powerful! what meant by this is it can answer different Questions! To check it out, press the  button below",
    link: "https://yourlink.com/",
  },
  {
    img: "images/avenue.jpg",
    title: `<a href='https://www.google.com'> ChatGPT: </a>Asking Questions Platform!`,
    date: `7/8/2023`,
    admin: "Owner",
    desc: "it is the chatbot released in 2023 and developed by OpenAI Company! in addition, Its powerful! what meant by this is it can answer different Questions! To check it out, press the  button below",
    link: "https://yourlink.com/",
  }
  ]
  
data.forEach(i=>{
  const box = document.createElement("div");
  box.setAttribute("class", "box");
  posts.appendChild(box);
  const aTag = document.createElement("a");
  const img = document.createElement("img");
  img.src = i.img;
  box.appendChild(aTag);
  aTag.append(img);
  aTag.href = i.link
  const title = document.createElement("h2");
  const aSearch = document.createElement("a");
  title.appendChild(aSearch);
  aSearch.innerHTML = i.title;
  box.appendChild(title)
  aSearch.setAttribute("id", "googleit");
  const info = document.createElement("div");
  info.setAttribute("class", "info");
  box.appendChild(info);
  let date = document.createElement("h4");
  date.setAttribute("class", "date");
  let dateA = document.createElement("a");
  dateA.innerHTML = i.date;
  dateA.href = "hi.com"
  dateA.style.color = "white";
  date.appendChild(dateA);
  box.appendChild(date);
  let admin = document.createElement("h4");
  admin.setAttribute("class", "admin");
  let adminA = document.createElement("a");
  adminA.innerHTML = i.admin;
  adminA.href = "t.me/"
  adminA.style.color = "black";
  admin.appendChild(adminA);
  //admin.innerHTML = i.admin;
  box.appendChild(admin);
  let des = document.createElement("p");
  let desA = document.createElement("a");
  box.appendChild(des)
  des.appendChild(desA)
  desA.setAttribute("class", "description")
  desA.href = i.link;
  desA.innerHTML = i.desc;
  let desrm = document.createElement("a");
  desrm.href = i.link;
  desrm.innerHTML = "Read More"
  des.appendChild(desrm);
  desrm.setAttribute("class", "rm");
  desrm.style.marginTop = "45px";
})


randomPosts = ["style.css", "script.js", "index.html"]

shuffle.addEventListener("click", ()=>{
  let random = randomPosts[Math.floor(Math.random() * randomPosts.length)]
  location.href = random;
})


if (header.style.top <= -20) {
  header.style.position = "fixed";
}

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

let searchGoogle = document.getElementById("googleit");

searchGoogle.addEventListener("click", (e)=>{
})

var options = {
  strings: ['<a style="color: lime; font-size: 20px; font-weight: 400;" href="style.css">ChatGPT: The Chatbot which can......</a>','<a style="color: white; font-size: 17px; font-weight: 400;" href="style.css">ChatGPT: The Chatbot which can......</a>'],
  typeSpeed: 200,
  backSpeed: 100,
  loop: true
};

var typed = new Typed('#anime', options);
