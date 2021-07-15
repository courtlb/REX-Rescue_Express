const db = require('./connection');
const { User, Dog, Size } = require('../models');

db.once('open', async () => {
  await Size.deleteMany();

  const size = await Size.insertMany([
    { size: 'Toy' },
    { size: 'Small' },
    { size: 'Medium' },
    { size: 'Large' },
    { size: 'Giant' }
  ]);

  console.log('size seeded');

  await Dog.deleteMany();

  const dogs = await Dog.insertMany([
    {
      name: 'Arrow',
      description:
        'Arrow is a handsome young dog looking for his forever home! He is very active and would be best with an owner that is a marathon runner and can throw a ball really, really far.',
      image: 'arrow.jpg',
      breed: 'Belgian Malinois',
      age: '2 years',
      size: size[3]._id,
    },
    {
      name: 'Rusty',
      description:
        'Playful great with kids, extremely active, hypoallergenic.',
      image: 'rusty.jpg',
      breed: 'Scottish Terrier',
      age: '5 years',
      size: size[1]._id,
    },
    {
      name: 'Bentley',
      description:
        'Very active and loves to fetch. Loves to play and is very sweet.',
      image: 'bentley.jpg',
      breed: 'Boston Terrier',
      age: '5 years',
      size: size[1]._id,
    },
    {
      name: 'Bella',
      description:
        'Loves to lick faces and is protective of her food.',
      image: 'bella.jpg',
      breed: 'Boston Terrier',
      age: '5 years',
      size: size[1]._id,
    },
    {
      name: 'Brady',
      description:
        'Very curious and loves to explore. Perfect sidekick who loves adventure.',
      image: 'brady.jpg',
      breed: 'Boston Terrier',
      age: '5 years',
      size: size[1]._id,
    },
    {
      name: 'Kai',
      description:
        'Kai likes laying on cold tile floor and leaving tufts of hair in every nook and cranny.',
      image: 'kai.jpg',
      breed: 'Siberian Husky',
      age: '12 years',
      size: size[2]._id,
    },
    {
      name: 'Leo',
      description:
        'Leo will let you know when someone is at the door and loves  to burrow in the blankets for mid-day naps.',
      image: 'leo.jpg',
      breed: 'Beagle / Dachshund Mix',
      age: '12 years',
      size: size[1]._id,
    },
    {
      name: 'Chief',
      description:
        'Chief is the perfect companion! He enjoys lots of belly rubs and his favorite activity is swimming.',
      image: 'chief.jpg',
      breed: 'German Shepherd',
      age: '8 years',
      size: size[3]._id,
    },
    {
      name: 'Echo',
      description:
        'Echo lives up to her name! This girl loves to bark and would make a great guard dog.',
      image: 'echo.jpg',
      breed: 'German Shepherd',
      age: '5 years',
      size: size[3]._id,
    },
    {
      name: 'Camelot',
      description:
        'Camelot is the floofiest boy in Rescue Express! He loves ice cream and hiking.',
      image: 'camelot.jpg',
      breed: 'Samoyed',
      age: '3 years',
      size: size[2]._id,
    },
    {
      name: 'Roux',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'roux.jpg',
      breed: 'Corgi',
      age: '3 years',
      size: size[1]._id,
    },
    {
      name: 'Finn',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'finn.jpg',
      breed: 'Mixed Breed',
      age: '6 years',
      size: size[2]._id,
    },
    {
      name: 'Bucky',
      description:
        'Bucky is the quintessential Golden Retriever! He loves everyone and everything, especially water and birds! ',
      image: 'bucky.jpg',
      breed: 'Golden Retriever',
      age: '3 years',
      size: size[2]._id,
    },
    {
      name: 'Roshi',
      description:
        'Bad dog, but a good boy.',
      image: 'roshi.jpg',
      breed: 'Chesapeake Bay Retriever Mix',
      age: '5 years',
      size: size[2]._id,
    }
  ]);

  console.log('dogs seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@email.com',
    password: 'password12345',
    applications: [
      {
        dogs: [dogs[0]._id]
      }
    ]
  });

  await User.create({
    firstName: 'John',
    lastName: 'Smith',
    email: 'john@email.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
