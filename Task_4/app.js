const images = document.getElementsByClassName('imageFilter');

const animalRadios = document.getElementsByName('animalType');

filterAnimals = (e) => {
   const selectedAnimal = e.target.value;

for (const image of images) {
    if (image.getAttribute('animal') === selectedAnimal || image.getAttribute('animal') === 'all') {
        image.classList.remove('hidden');
    }
    else {
    image.classList.add('hidden');
    }
}
}

for (const animalRadio of animalRadios) {
    animalRadio.addEventListener('change', filterAnimals);
}

