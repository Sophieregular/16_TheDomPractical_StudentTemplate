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