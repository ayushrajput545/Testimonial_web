const reviews = [
    {
      id: 1,
      name: "Pranay Gupta",
      job: "Software Engineer",
      image: "https://aeccc.targettechnology.in/static/media/PranayGupta.f3c530b7630ba8efb2ab.jpg",
      text: "I have had the pleasure of working with this team on several projects, and I am consistently impressed with their technical expertise and ability to deliver quality solutions on time and within budget. They are a true partner and an asset to any project.",
    },
    {
      id: 2,
      name: "Abir Pal",
      job: "Graphic Designer",
      image: "https://aeccc.targettechnology.in/static/media/AbirPal.574a09ad7cb325853b29.jpg",
      text: "I have been working with this company for several years now, and I have always been impressed with their creativity and attention to detail. They are true professionals who take pride in their work and always go above and beyond to deliver exceptional results.",
    },
    {
      id: 3,
      name: "Soumya Banerjee",
      job: "Marketing Manager",
      image: "https://aeccc.targettechnology.in/static/media/SoumyaBanerjee.2e2521d6029842435080.jpg",
      text: "I am thrilled with the results of our recent marketing campaign, and it wouldn't have been possible without the hard work and dedication of the entire team. Thank you for your exceptional work!",
    },
  ];
  
  let currentIndex = 0;
  
  // DOM Elements
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const randomBtn = document.getElementById("random-btn");
  
  function showPerson(index) {
    const person = reviews[index];
    img.src = person.image;
    author.textContent = person.name;
    job.textContent = person.job;
    info.textContent = person.text;
  }
  
  // Initial load
  window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentIndex);
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex > reviews.length - 1) {
      currentIndex = 0;
    }
    showPerson(currentIndex);
  });
  
  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = reviews.length - 1;
    }
    showPerson(currentIndex);
  });
  
  randomBtn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    currentIndex = randomIndex;
    showPerson(currentIndex);
  });
  