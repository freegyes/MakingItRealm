(function(){
  const creations = document.querySelectorAll('.js-creation');

  creations.forEach(creation => {
    creation.style.order = Math.ceil(Math.random() * creations.length);
  });

})();