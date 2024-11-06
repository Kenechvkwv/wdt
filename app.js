const users = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    age: "28",
    info: "A passionate wildlife enthusiast and photographer, often found exploring nature.",
    image: "./assets/panda.png",
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    age: "35",
    info: "An avid reader and aspiring novelist, Jane loves spending her weekends at local cafes.",
    image: "./assets/business-man.png",
  },
  {
    name: "Sarah Johnson",
    email: "sarahjohnson@example.com",
    age: "30",
    info: "A fitness enthusiast, Alex enjoys hiking and participating in marathons around the country.",
    image: "./assets/woman.png",
  },
  {
    name: "Mike Brown",
    email: "mikebrown@example.com",
    age: "45",
    info: "Tech-savvy and innovative, Sarah is known for her cutting-edge software solutions.",
    image: "./assets/man1.png",
  },
  {
    name: "Alex Martinez",
    email: "alexmartinez@example.com",
    age: "27",
    info: "A creative designer with a flair for modern art and digital illustrations.",
    image: "./assets/boy.png",
  },
];

const template = document.getElementById("user-template");
const usersContainer = document.querySelector(".users-container");

users.forEach((user) => {
  const userClone = template.content.cloneNode(true);

  userClone.querySelector(".user-name").textContent = user.name;
  userClone.querySelector(".user-email").textContent = user.email;
  userClone.querySelector(".user-age").textContent = `${user.age} years old`;
  userClone.querySelector(".user-info").textContent = user.info;
  userClone.querySelector(".user-image").src = user.image;

  // close button
  const closeButton = userClone.querySelector(".btn-close");
  closeButton.textContent = "X";
  closeButton.addEventListener("click", (e) => {
    const card = e.target.closest(".user-container");
    card.style.transition = "opacity 0.7s";
    card.style.opacity = "0";

    //    remove card
    setTimeout(() => {
      card.remove();
    }, 500);
  });

  usersContainer.appendChild(userClone);
});
