    const slides = document.querySelector(".slides");
    const slideCount = document.querySelectorAll(".slide").length; // 6
    let currentSlide = 0;
    const intervelTime = 3000;
    let slideIntervel;

      
      function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlide();
      }

      
      function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlide();
      }

      function updateSlide() {
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
      }

      
      function startSlider() {
        slideIntervel = setInterval(nextSlide, intervelTime);
      }

      
      function stopSlider() {
        clearInterval(slideIntervel);
      }

      
      document.querySelector(".prev").addEventListener("click", () => {
        prevSlide();
        stopSlider();
        startSlider();
      });

      document.querySelector(".next").addEventListener("click", () => {
        nextSlide();
        stopSlider();
        startSlider();
      });

      startSlider();

      
      const model = document.getElementById("myModel");
      const colseModelBtn = document.getElementById("closeModel");

      
      setTimeout(() => {
        model.style.display = "flex";
      }, 5000);

      colseModelBtn.addEventListener("click", () => {
        model.style.display = "none";
      });
  