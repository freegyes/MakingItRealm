(function(){
  const creations = document.querySelectorAll('.js-creation');
  let featured = creations[0];
  let smallest = creations.length;

  creations.forEach(creation => {
    const order = Math.ceil(Math.random() * creations.length)
    creation.style.order = order;
    if (order < smallest) {
      featured = creation;
      smallest = order;
    }
  });
  
  featured.classList.add("featured");

})();