const options = {};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
      //   entry.target.classList.remove("slide-up");
      entry.target.classList.add("appear");
      //   observer.unobserve(entry);
    }
  });
}, options);

const fade = document.querySelectorAll(".slide-up");

fade.forEach((entry) => {
  observer.observe(entry);
});

const iconobserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
      //   entry.target.classList.remove("slide-up");
      entry.target.classList.add("appear");
      //   observer.unobserve(entry);
    }
  });
}, options);

const iconfade = document.querySelectorAll(".icon-slide-up");

iconfade.forEach((entry) => {
  observer.observe(entry);
});

const navobserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
      //   entry.target.classList.remove("slide-up");
      entry.target.classList.add("opacity-appear");
      //   observer.unobserve(entry);
    }
  });
}, options);

const navfade = document.querySelectorAll(".nav-opacity-fade");

navfade.forEach((entry) => {
  observer.observe(entry);
});
