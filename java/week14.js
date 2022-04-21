const myCar = new Object();
myCar.color = 'Gray';
myCar.make = 'Mazda';
myCar.model = 'CX-5';
myCar.year = '2017';

console.log(myCar.make);

const mySecondCar = {
  color: 'Blue',
  make:'Ford',
  model: 'ranger',
  year:'2020'
}

console.log(mySecondCar.make);
console.log(myCar['make']);


const superHeroes = {
  squadName: 'Super hero squad',
  homeTown: 'Metro City',
  formed: 2016,
  secretBase: 'Super tower',
  active: true,
  members: [
    {
      // array [object,object,object]
      //superHeroes['members'][0]
      name: 'Molecule Man',
      age: 29,
      secretIdentity: 'Dan Jukes',
      powers: [
        'Radiation resistance',
        'Turning tiny',
        'Radiation blast'
      ]
    },
    {
      name: 'Madame Uppercut',
      age: 39,
      secretIdentity: 'Jane Wilson',
      powers: [
        'Million tonne punch',
        'Damage resistance',
        'Superhuman reflexes'
      ]
    },
    {
      name: 'Eternal Flame',
      age: 1000000,
      secretIdentity: 'Unknown',
      powers: [
        'Immortality',
        'Heat Immunity',
        'Inferno',
        'Teleportation',
        'Interdimensional travel'
      ]
    }
  ]
}
console.log(superHeroes['members'][0]['powers'][0])

function populateHeader(x){
const header = document.querySelector('header');
const myH1 = document.createElement('h1');

myH1.textContent = x['squadName'];
header.appendChild(myH1);

const myPara = document.createElement('p');
// myPara.textContent= 'HomeTown: ${x['homeTown']} // Formed:

header.appendChild(myPara);

}

function populateHeroes(obj) {
  const section = document.querySelector('section');
  const heroes = obj['members'];

  for (const hero of heroes) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = 'Superpowers:';

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement('li');
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}



populateHeader(superHeroes);
