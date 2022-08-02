const JSapi = async function get() {
  /* API POSTS */
  const response = await fetch(
    "https://almaghrebsport.com/wp-json/wp/v2/posts"
  );
  const data = await response.json();

  const responsemedia = await fetch(
    "https://almaghrebsport.com/wp-json/wp/v2/media"
  );
  const media = await responsemedia.json();

  document
    .getElementsByTagName("head")[0]
    .insertAdjacentHTML(
      "beforeend",
      '<link rel="stylesheet" href="https://cdn.statically.io/gh/StingTeamDev/Po-api/main/c.css"/>'
    );

  document.querySelector("#PAutoSting1 img").src = media[0].guid.rendered;
  document.querySelector("#PAutoSting1 img").alt = data[0].title.rendered;
  document.querySelector("#PAutoSting1 a").innerHTML = data[0].title.rendered;

  document.querySelector("#PAutoSting2 img").src = media[1].guid.rendered;
  document.querySelector("#PAutoSting2 img").alt = data[1].title.rendered;
  document.querySelector("#PAutoSting2 a").innerHTML = data[1].title.rendered;

  document.querySelector("#PAutoSting3 img").src = media[2].guid.rendered;
  document.querySelector("#PAutoSting3 img").alt = data[2].title.rendered;
  document.querySelector("#PAutoSting3 a").innerHTML = data[2].title.rendered;

  document.querySelector("#PAutoSting4 img").src = media[3].guid.rendered;
  document.querySelector("#PAutoSting4 img").alt = data[3].title.rendered;
  document.querySelector("#PAutoSting4 a").innerHTML = data[3].title.rendered;

  document.querySelector("#PAutoSting5 img").src = media[4].guid.rendered;
  document.querySelector("#PAutoSting5 img").alt = data[4].title.rendered;
  document.querySelector("#PAutoSting5 a").innerHTML = data[4].title.rendered;

  document.querySelector("#PAutoSting6 img").src = media[5].guid.rendered;
  document.querySelector("#PAutoSting6 img").alt = data[5].title.rendered;
  document.querySelector("#PAutoSting6 a").innerHTML = data[5].title.rendered;

  document.querySelector("#PAutoSting7 img").src = media[6].guid.rendered;
  document.querySelector("#PAutoSting7 img").alt = data[6].title.rendered;
  document.querySelector("#PAutoSting7 a").innerHTML = data[6].title.rendered;

  document.querySelector("#PAutoSting8 img").src = media[7].guid.rendered;
  document.querySelector("#PAutoSting8 img").alt = data[7].title.rendered;
  document.querySelector("#PAutoSting8 a").innerHTML = data[7].title.rendered;

  /* API POSTS */

  const Content = document.querySelector(".contentapi");
  const Contentlink = document.querySelectorAll(".Po");
  const closepostapi = document.querySelector(".closepostapi");

  Contentlink.forEach((item) => {
    item.addEventListener("click", () => {
      Content.classList.add("actived");
    });
  });

  closepostapi.addEventListener("click", () => {
    Content.classList.remove("actived");
  });

  const Sting =
    "Posts auto api ~> Version : 1.0 BETA - Powered by - Sting Web     Facebook Page Call us --- https://www.facebook.com/stingweb.eg";
  console.log(Sting);

  const Poo1 = document.querySelector(".Poo1");
  const Poo2 = document.querySelector(".Poo2");
  const Poo3 = document.querySelector(".Poo3");
  const Poo4 = document.querySelector(".Poo4");
  const Poo5 = document.querySelector(".Poo5");
  const Poo6 = document.querySelector(".Poo6");
  const Poo7 = document.querySelector(".Poo7");
  const Poo8 = document.querySelector(".Poo8");

  Poo1.addEventListener("click", () => {
    document.querySelector(".contentv1 img").src = media[0].guid.rendered;
    document.querySelector(".contentv1 p").innerHTML = data[0].content.rendered;
  });

  Poo2.addEventListener("click", () => {
    document.querySelector(".contentv1 img").src = media[1].guid.rendered;
    document.querySelector(".contentv1 p").innerHTML = data[1].content.rendered;
  });

  Poo3.addEventListener("click", () => {
    document.querySelector(".contentv1 img").src = media[2].guid.rendered;
    document.querySelector(".contentv1 p").innerHTML = data[2].content.rendered;
  });

  Poo4.addEventListener("click", () => {
    document.querySelector(".contentv1 img").src = media[3].guid.rendered;
    document.querySelector(".contentv1 p").innerHTML = data[3].content.rendered;
  });

  Poo5.addEventListener("click", () => {
    document.querySelector(".contentv1 img").src = media[4].guid.rendered;
    document.querySelector(".contentv1 p").innerHTML = data[4].content.rendered;
  });

  Poo6.addEventListener("click", () => {
    document.querySelector(".contentv1 img").src = media[5].guid.rendered;
    document.querySelector(".contentv1 p").innerHTML = data[5].content.rendered;
  });

  Poo7.addEventListener("click", () => {
    document.querySelector(".contentv1 img").src = media[6].guid.rendered;
    document.querySelector(".contentv1 p").innerHTML = data[6].content.rendered;
  });

  Poo8.addEventListener("click", () => {
    document.querySelector(".contentv1 img").src = media[7].guid.rendered;
    document.querySelector(".contentv1 p").innerHTML = data[7].content.rendered;
  });
};

JSapi();
