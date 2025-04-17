const reviews = [
    {
      name: "Pranay Gupta",
      job: "Software Engineer",
      image: "https://aeccc.targettechnology.in/static/media/PranayGupta.f3c530b7630ba8efb2ab.jpg",
      text: "I have had the pleasure of working with this team on several projects, and I am consistently impressed with their technical expertise and ability to deliver quality solutions on time and within budget. They are a true partner and an asset to any project.",
    },
    {
      name: "Abir Pal",
      job: "Graphic Designer",
      image: "https://aeccc.targettechnology.in/static/media/AbirPal.574a09ad7cb325853b29.jpg",
      text: "I have been working with this company for several years now, and I have always been impressed with their creativity and attention to detail. They are true professionals who take pride in their work and always go above and beyond to deliver exceptional results.",
    },
    {
      name: "Soumya Banerjee",
      job: "Marketing Manager",
      image: "https://aeccc.targettechnology.in/static/media/SoumyaBanerjee.2e2521d6029842435080.jpg",
      text: "I am thrilled with the results of our recent marketing campaign, and it wouldn't have been possible without the hard work and dedication of the entire team. Thank you for your exceptional work!",
    },
  ];
  
  // Generate slides
  const wrapper = document.getElementById("testimonial-wrapper");
  
  reviews.forEach((review) => {
    wrapper.innerHTML += `
      <div class="swiper-slide">
        <div class="img-container">
          <img src="${review.image}" alt="${review.name}" />
          <div class="img-background"></div>
        </div>
        <h2 class="name">${review.name}</h2>
        <h4 class="job">${review.job}</h4>
        <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
        <p class="text">${review.text}</p>
        <div class="quote-icon"><i class="fas fa-quote-right"></i></div>
      </div>
    `;
  });
  
  // Initialize Swiper
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  