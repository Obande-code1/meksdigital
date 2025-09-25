// for the hamburger
    function toggleMenu() {
      document.querySelector("nav ul").classList.toggle("active");
    }

    // for the date
    document.getElementById("year").textContent = new Date().getFullYear();

    // for the carousel
    const track = document.getElementById("track");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const dotsContainer = document.getElementById("dots");

    let index = 0;
    const slideCount = slides.length;
    const intervalTime = 10000; // 10 seconds
    let autoSlide;

    // Create dots
    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll(".dot");

    function updateSlide() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }

    function goToSlide(i) {
      index = i;
      updateSlide();
      resetAutoSlide();
    }

    function nextSlide() {
      index = (index + 1) % slideCount;
      updateSlide();
    }

    function prevSlide() {
      index = (index - 1 + slideCount) % slideCount;
      updateSlide();
    }

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    function startAutoSlide() {
      autoSlide = setInterval(nextSlide, intervalTime);
    }

    function resetAutoSlide() {
      clearInterval(autoSlide);
      startAutoSlide();
    }

    startAutoSlide();

    // for the modal section
    function openModal(img) {
    var modal = document.getElementById("galleryModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
  }

  function closeModal() {
    document.getElementById("galleryModal").style.display = "none";
  }