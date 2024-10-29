type Person = {
  name: string;
  age: number;
  employee: {
    company: string;
    profession: string;
  };
};

const person = {
  name: 'Magda',
  age: 25,
  employee: {
    company: 'Leedoo',
    profession: 'QA',
  },
} as const;

const person2: Readonly<Person> = {
  name: 'Andrzej',
  age: 22,
  employee: {
    company: 'Leedoo',
    profession: 'QA',
  },
};

person2.age = 23;
person.employee.company = 'SalesManago';
