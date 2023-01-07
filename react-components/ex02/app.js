const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
 1. Folosind obiectul person si reduce, afiseaza
  in consola un string care contine skill-urile de pe
  pozitiile pare ale arrayului, separate prin virgula
`);
const skillArray1 = person.skills.reduce((skillArray1, skill, index) => {
  if (index % 2 === 0) {
    skillArray1.push(skill);
  }

  return skillArray1;
}, []);
console.log(skillArray1.toString());

console.warn(`
 2. In mod similar, afiseaza skill-urile care NU incep cu j.
`);
const skillArray2 = person.skills.reduce((skillArray2, skill) => {
  if (!skill.toLowerCase().startsWith('j')) {
    skillArray2.push(skill);
  }

  return skillArray2;
}, []);
console.log(skillArray2.join(' - '));

console.warn(`
 3.  Folosind reduce afiseaza propozitia:
  "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."
`);
const message1 = person.friends.reduce(
  (message1, { name, surname }, index, friends) => {
    let punctuation = ', ';

    if (index === friends.length - 1) {
      punctuation = '.';
    }

    message1 += `${name} ${surname}${punctuation}`;

    return message1;
  },
  'Prietenii mei se numesc ',
);
console.log(message1);

console.warn(`
  4. Folosind reduce, afiseaza numarul total de ani pe care il au persoanele din arrayul friends,
  doar daca varsta este mai mare sau egala cu 30 de ani.
`);

const sumAge = person.friends.reduce((sumAge, { age }) => {
  if (age >= 30) {
    sumAge += age;
  }
  return sumAge;
}, 0);

console.log(sumAge);

console.warn(`
  5. Folosind reduce, afiseaza suma anilor de nastere a persoanelor.
`);

const currentYear = new Date().getFullYear();
const yearSum = person.friends.reduce((yearSum, { age }) => {
  const yearFriend = currentYear - age;
  yearSum += yearFriend;
  return yearSum;
}, 0);

console.log(yearSum);

console.warn(`
  6. Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani.
  Intre Dragos si Steven... ", doar daca varsta prietenului este impara.
`);
const message2 = person.friends.reduce((message2, friend) => {
  const { age, name } = friend;
  const diff = person.age - age;

  if (age % 2 !== 0) {
    message2 += `Intre ${person.name} si ${name} este o diferenta de ${diff} ani. `;
  }

  return message2;
}, '');
console.log(message2.trim());

console.warn(`
  7. Folosind obiectul person si reduce, afiseaza in consola un string
  care contine skillurile persoanei, separate prin virgula
`);

const skillArray4 = person.skills.reduce((skillArray4, skill) => {
  skillArray4.push(skill);

  return skillArray4;
}, []);
console.log(skillArray4.toString());

console.warn(`
  8.  In mod similar, afiseaza skillurile care incep cu c
`);

const skillArray5 = person.skills.reduce((skillArray5, skill, index) => {
  if (skill.toLowerCase().startsWith('c')) {
    skillArray5.push(skill);
  }

  return skillArray5;
}, []);
console.log(skillArray5.toString());

console.warn(`
  9. Folosind reduce, afiseaza propozitia: "Numele de familie ale
  prietenilor mei sunt: xxx, xxx , xxx."
`);

const message9 = person.friends.reduce(
  (message9, { surname }, index, friends) => {
    let punctuation = ',';
    if (index === friends.length - 1) {
      punctuation = '.';
    }
    message9 += `${surname}${punctuation}`;
    return message9;
  },

  `Numele de familie ale prietenilor mei sunt: `,
);

console.log(message9);

console.warn(`
  10. Folosind reduce, afiseaza numarul total de ani pe care il au persoanele din arrayul friends
`);

const sumAge2 = person.friends.reduce((sumAge2, { age }) => {
  sumAge2 += age;
  return sumAge2;
}, 0);
console.log(sumAge2);

console.warn(`
  11.  Folosind reduce, afiseaza suma anilor  persoanelor.
`);

//currentYear l-am definit mai sus
const yearSum2 = person.friends.reduce((yearSum2, { age }) => {
  yearFriend2 = currentYear - age;
  yearSum2 += yearFriend2;
  return yearSum2;
}, 0);

console.log(yearSum2);

console.warn(`
  12. Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.
`);

const ageDiff = person.friends.reduce((ageDiff, { age }) => {
  const Diff2 = person.age - age;
  ageDiff.push(Diff2);
  return ageDiff;
}, []);

console.log(ageDiff);

console.warn(`
  13.  Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani.
  Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.
`);

const message13 = person.friends.reduce((message13, { name, age }) => {
  const ageDiff = Math.abs(person.age - age);

  const pluralize = (count, { one = '', many = '' }) => {
    return `${count} ${count > 1 ? many : one}`;
  };

  message13 += `Intre ${person.name} si ${name} este o diferenta de ${pluralize(
    ageDiff,
    {
      one: 'an',
      many: 'ani',
    },
  )}.`;
  return message13;
}, '');

console.log(message13);
