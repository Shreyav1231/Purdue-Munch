const iconElements = document.querySelectorAll(".icon-toggle");
const likeCounter = document.querySelector('.like-counter');
let likes = 0;

iconElements.forEach((iconElement) => {
  iconElement.addEventListener("click", function(event) {
    if (iconElement.classList.contains("bi-heart")) {
      iconElement.classList.remove("bi-heart");
      iconElement.classList.add("bi-heart-fill", "heart-fill");
      likes += 1;
      likeCounter.innerHTML = likes;
    } else if (iconElement.classList.contains("bi-heart-fill")) {
      iconElement.classList.remove("bi-heart-fill", "heart-fill");
      iconElement.classList.add("bi-heart");
      likes -= 1;
      likeCounter.innerHTML = likes;
    }
  });
});
