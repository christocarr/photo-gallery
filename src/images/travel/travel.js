import tukTukDriver from './tuk-tukdriver/tuk-tukdriver1920.jpg';
import boat1920 from './boat/boat1920.jpg';
import market1920 from './market/market1920.jpg';
import seascape1920 from './seascape/seascape1920.jpg';
import kiliview1920 from './kiliview/kiliview1920.jpg';
import kosamuibiker from './kosamuibiker.jpg';
import CapePointLightHouse from './CapePointLightHouse.jpg';
import beerbay1024 from './beer/beerbay1024.jpg';

export const travelPhotos = [
  {
    src: tukTukDriver,
    width: 3,
    height: 4,
    key: '3',
    alt: 'Bangkok tuk-tuk driver',
  },
  {
    src: boat1920,
    // srcSet: [
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 4.2,
    height: 3,
    key: '0',
    alt: 'Boat in the Caribbean sunset',
  },
  {
    src: market1920,
    // srcSet: [
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 5,
    height: 3,
    key: '1',
    alt: 'Mexican market',
  },
  {
    src: seascape1920,
    // srcSet: [
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 4,
    key: '2',
    alt: 'Caribbean nights',
  },
  {
    src: kiliview1920,
    // srcSet: [
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 4,
    height: 3,
    key: '4',
    alt: 'View of Uhuru peak, Kilimanjaro',
  },
  {
    src: kosamuibiker,
    // srcSet: [
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 5,
    height: 3,
    key: '5',
    alt: 'Scooter rider in Ko Samui',
  },
  {
    src: CapePointLightHouse,
    // srcSet: [
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3.5,
    height: 5,
    key: '6',
    alt: 'Looking up at Cape Point lighthouse',
  },
  {
    src: beerbay1024,
    // srcSet: [
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 2.5,
    height: 5,
    key: '7',
    alt: 'Footpath leading down to Beer beach front',
  },
];
