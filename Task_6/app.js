const images = document.getElementsByClassName('imageFilter');
const form = document.getElementById('filters')
const animalRadios = document.getElementsByName('animalType');
const search = document.getElementById('search')
let selectedAnimal = 'all';


shouldShowImage = (image) => {

  if (selectedAnimal !== 'all' && selectedAnimal !== image.getAttribute('animal')) {
    return false;
  }

  if (!search.value) {
    return true;
  }

  return image.alt.toLowerCase().includes(search.value.toLowerCase());
}

filterAnimals = () => {
  for (const image of images) {
    if (shouldShowImage(image)) {
      image.classList.remove('hidden');
    }
    else {
      image.classList.add('hidden');
    }
  }  
}

updateSummary = () => {

  /* This was the code we used in the lesson, but I think it might not work with Justin's refactored code, 
  which I followed for these tasks - because it uses a form querySelector and Justin's code uses 'document.getElements' 
  to select each of the different nodes instead? the 'document.getElementById('summary').innerHTML' selector does work
  though, and does add a title to the 'Search' results even though it's not dynamic  */

  // const filterLabel = form.querySelector(`label[for=${animalRadios.value}]`).textContent;
  // const searchTitle = search.value ?
  // `Showing results that match the search "${filterLabel}" and the search "${search.value}".` :
  // `Showing results that match the search "${filterLabel}".`
  // document.getElementById('summary').innerHTML = searchTitle

  document.getElementById('summary').innerHTML = 'Showing Results from Navigation'
}

updateSummary()

update = () => {
  selectedAnimal = document.querySelector('input[name="animalType"]:checked').value;
  filterAnimals();
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
});

for (const animalRadio of animalRadios) {
  animalRadio.addEventListener('change', update);
}

search.addEventListener('keyup', update);