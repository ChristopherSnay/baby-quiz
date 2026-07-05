const isDev = import.meta.env.MODE === 'development';

const imageUrl = (imageName: string) => {
  return isDev ? `/${imageName}` : `/baby-quiz/${imageName}`;
};

export const animals = [
  {
    id: 1,
    name: 'Kangaroo',
    icon: <img src={imageUrl('kangaroo.png')} className="w-100" />
  },
  {
    id: 2,
    name: 'Camel',
    icon: <img src={imageUrl('camel.png')} className="w-100" />
  },
  {
    id: 3,
    name: 'Zebra',
    icon: <img src={imageUrl('zebra.png')} className="w-100" />
  },
  {
    id: 4,
    name: 'Crocodile',
    icon: <img src={imageUrl('crocodile.png')} className="w-100" />
  },
  {
    id: 5,
    name: 'Horse',
    icon: <img src={imageUrl('horse.png')} className="w-100" />
  },
  {
    id: 6,
    name: 'Donkey',
    icon: <img src={imageUrl('donkey.png')} className="w-100" />
  },
  {
    id: 7,
    name: 'Lion',
    icon: <img src={imageUrl('lion.png')} className="w-100" />
  },
  {
    id: 8,
    name: 'Tiger',
    icon: <img src={imageUrl('tiger.png')} className="w-100" />
  },
  {
    id: 9,
    name: 'Pig',
    icon: <img src={imageUrl('pig.png')} className="w-100" />
  },
  {
    id: 10,
    name: 'Penguin',
    icon: <img src={imageUrl('penguin.png')} className="w-100" />
  },
  {
    id: 11,
    name: 'Flamingo',
    icon: <img src={imageUrl('flamingo.png')} className="w-100" />
  },
  {
    id: 12,
    name: 'Snake',
    icon: <img src={imageUrl('snake.png')} className="w-100" />
  },
  {
    id: 13,
    name: 'Parrot',
    icon: <img src={imageUrl('parrot.png')} className="w-100" />
  },
  {
    id: 14,
    name: 'Dolphin',
    icon: <img src={imageUrl('dolphin.png')} className="w-100" />
  },
  {
    id: 15,
    name: 'Elephant',
    icon: <img src={imageUrl('elephant.png')} className="w-100" />
  },
  {
    id: 16,
    name: 'Bat',
    icon: <img src={imageUrl('bat.png')} className="w-100" />
  },
  {
    id: 17,
    name: 'Frog',
    icon: <img src={imageUrl('frog.png')} className="w-100" />
  },
  {
    id: 18,
    name: 'Fox',
    icon: <img src={imageUrl('fox.png')} className="w-100" />
  },
  {
    id: 19,
    name: 'Fish',
    icon: <img src={imageUrl('fish.png')} className="w-100" />
  },
  {
    id: 20,
    name: 'Chicken',
    icon: <img src={imageUrl('chicken.png')} className="w-100" />
  },
  {
    id: 21,
    name: 'Owl',
    icon: <img src={imageUrl('owl.png')} className="w-100" />
  },
  {
    id: 22,
    name: 'Whale',
    icon: <img src={imageUrl('whale.png')} className="w-100" />
  },
  {
    id: 23,
    name: 'Cow',
    icon: <img src={imageUrl('cow.png')} className="w-100" />
  },
  {
    id: 24,
    name: 'Butterfly',
    icon: <img src={imageUrl('butterfly.png')} className="w-100" />
  },
  {
    id: 25,
    name: 'Turtle',
    icon: <img src={imageUrl('turtle.png')} className="w-100" />
  },
  {
    id: 26,
    name: 'Bear',
    icon: <img src={imageUrl('bear.png')} className="w-100" />
  },
  {
    id: 27,
    name: 'Sheep',
    icon: <img src={imageUrl('sheep.png')} className="w-100" />
  },
  {
    id: 28,
    name: 'Crab',
    icon: <img src={imageUrl('crab.png')} className="w-100" />
  },
  {
    id: 29,
    name: 'Monkey',
    icon: <img src={imageUrl('monkey.png')} className="w-100" />
  },
  {
    id: 30,
    name: 'Giraffe',
    icon: <img src={imageUrl('giraffe.png')} className="w-100" />
  },
  {
    id: 31,
    name: 'Chameleon',
    icon: <img src={imageUrl('chameleon.png')} className="w-100" />
  },
  {
    id: 32,
    name: 'Squirrel',
    icon: <img src={imageUrl('squirrel.png')} className="w-100" />
  },
  {
    id: 33,
    name: 'Raccoon',
    icon: <img src={imageUrl('raccoon.png')} className="w-100" />
  },
  {
    id: 34,
    name: 'Duck',
    icon: <img src={imageUrl('duck.png')} className="w-100" />
  },
  {
    id: 35,
    name: 'Cheetah',
    icon: <img src={imageUrl('cheetah.png')} className="w-100" />
  },
  {
    id: 36,
    name: 'Dog',
    icon: <img src={imageUrl('dog.png')} className="w-100" />
  }
];
