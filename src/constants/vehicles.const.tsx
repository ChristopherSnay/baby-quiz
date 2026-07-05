const isDev = import.meta.env.MODE === 'development';

const imageUrl = (imageName: string) => {
  return isDev ? `/${imageName}` : `/baby-quiz/${imageName}`;
};

export const vehicles = [
  {
    id: 1,
    name: 'Fire Truck',
    icon: <img src={imageUrl('fire-truck.png')} className="w-100" />
  },
  {
    id: 2,
    name: 'Dump Truck',
    icon: <img src={imageUrl('dump-truck.png')} className="w-100" />
  },
  {
    id: 3,
    name: 'Tow Truck',
    icon: <img src={imageUrl('tow-truck.png')} className="w-100" />
  },
  {
    id: 4,
    name: 'Garbage Truck',
    icon: <img src={imageUrl('garbage-truck.png')} className="w-100" />
  },
  {
    id: 5,
    name: 'Cement Mixer',
    icon: <img src={imageUrl('cement-mixer.png')} className="w-100" />
  },
  {
    id: 6,
    name: 'Ice Cream Truck',
    icon: <img src={imageUrl('ice-cream-truck.png')} className="w-100" />
  },
  {
    id: 7,
    name: 'Delivery Truck',
    icon: <img src={imageUrl('delivery-truck.png')} className="w-100" />
  },
  {
    id: 8,
    name: 'Snow Plow',
    icon: <img src={imageUrl('snow-plow.png')} className="w-100" />
  },
  {
    id: 9,
    name: 'Semi Truck',
    icon: <img src={imageUrl('semi-truck.png')} className="w-100" />
  },
  {
    id: 10,
    name: 'Ambulance',
    icon: <img src={imageUrl('ambulance.png')} className="w-100" />
  },
  {
    id: 11,
    name: 'Police Car',
    icon: <img src={imageUrl('police-car.png')} className="w-100" />
  },
  {
    id: 12,
    name: 'School Bus',
    icon: <img src={imageUrl('school-bus.png')} className="w-100" />
  },
  {
    id: 13,
    name: 'Bicycle',
    icon: <img src={imageUrl('bicycle.png')} className="w-100" />
  },
  {
    id: 14,
    name: 'Motorcycle',
    icon: <img src={imageUrl('motorcycle.png')} className="w-100" />
  },
  {
    id: 15,
    name: 'Scooter',
    icon: <img src={imageUrl('scooter.png')} className="w-100" />
  },
  {
    id: 16,
    name: 'Bulldozer',
    icon: <img src={imageUrl('bulldozer.png')} className="w-100" />
  },
  {
    id: 17,
    name: 'Excavator',
    icon: <img src={imageUrl('excavator.png')} className="w-100" />
  },
  {
    id: 18,
    name: 'Jeep',
    icon: <img src={imageUrl('jeep.png')} className="w-100" />
  },
  {
    id: 19,
    name: 'Airplane',
    icon: <img src={imageUrl('airplane.png')} className="w-100" />
  },
  {
    id: 20,
    name: 'Helicopter',
    icon: <img src={imageUrl('helicopter.png')} className="w-100" />
  },
  {
    id: 21,
    name: 'Sailboat',
    icon: <img src={imageUrl('sailboat.png')} className="w-100" />
  },
  {
    id: 22,
    name: 'Train',
    icon: <img src={imageUrl('train.png')} className="w-100" />
  },
  {
    id: 23,
    name: 'Van',
    icon: <img src={imageUrl('van.png')} className="w-100" />
  },
  {
    id: 24,
    name: 'Tractor',
    icon: <img src={imageUrl('tractor.png')} className="w-100" />
  },
  {
    id: 25,
    name: 'Steam Roller',
    icon: <img src={imageUrl('steam-roller.png')} className="w-100" />
  },
  {
    id: 26,
    name: 'Cruise Ship',
    icon: <img src={imageUrl('cruise-ship.png')} className="w-100" />
  },
  {
    id: 27,
    name: 'Pickup Truck',
    icon: <img src={imageUrl('pickup-truck.png')} className="w-100" />
  },
  {
    id: 28,
    name: 'Space Shuttle',
    icon: <img src={imageUrl('space-shuttle.png')} className="w-100" />
  },
  {
    id: 29,
    name: 'Crane',
    icon: <img src={imageUrl('crane.png')} className="w-100" />
  },
  {
    id: 30,
    name: 'Hot Air Balloon',
    icon: <img src={imageUrl('hot-air-balloon.png')} className="w-100" />
  }
];
