const images = document.getElementsByClassName('imageFilter');

const animalRadios = document.getElementsByName('animalType');

filterAnimals = (e) => {
    console.log(e.target.value);

}

for (const animalRadio of animalRadios) {
    animalRadio.addEventListener('change', filterAnimals);
}