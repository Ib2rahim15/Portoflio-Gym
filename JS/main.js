window.onscroll = () => {

    if (window.scrollY > 80) {
        Header.classList.add("active");
    } else {
        Header.classList.remove("active");
    }
  };
  window.onload = () => {
    if (window.scrollY > 80) {
        Header.classList.add("active");
    } else {
        Header.classList.remove("active");
    }
  };