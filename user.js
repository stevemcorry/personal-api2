var user = {
  name: 'stephen',
  location: 'provo',
  occupations: ['lots','of','stuff'],
  hobbies: [
    {
      name: 'fathering',
      type: 'stressfull'
    },
    {
      name: 'loafing',
      type: 'relaxing'
    },
    {
      name: 'longboarding',
      type: 'relaxing'
    }
  ],
  family: [
    {
      name: 'Robert',
      relation: 'Dad',
      gender: 'male'
    },
    {
      name: 'Cecilia',
      relation: 'Mom',
      gender: 'female'
    },{
      name: 'Shanteen',
      relation: 'fake girlfriend',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: 'Donalds',
      type: 'fast food',
      rating: 6
    },
    {
      name: 'Panda',
      type: 'fast food',
      rating: 8
    },
    {
      name: 'Home kitchen',
      type: 'gourmet',
      rating: 10
    }
  ]
};
module.exports = user;
