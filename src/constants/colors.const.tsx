import {
  blue,
  brown,
  green,
  orange,
  pink,
  purple,
  red,
  yellow
} from '@mui/material/colors';
import type { GridItem } from '../models/GridItem';

export const colors: GridItem[] = [
  {
    id: 1,
    name: 'Red',
    icon: (
      <div className="w-100" style={{ backgroundColor: red[700], height: '100px' }}></div>
    )
  },
  {
    id: 2,
    name: 'Orange',
    icon: (
      <div
        className="w-100"
        style={{ backgroundColor: orange[700], height: '100px' }}
      ></div>
    )
  },
  {
    id: 3,
    name: 'Yellow',
    icon: (
      <div
        className="w-100"
        style={{ backgroundColor: yellow[600], height: '100px' }}
      ></div>
    )
  },
  {
    id: 4,
    name: 'Green',
    icon: (
      <div
        className="w-100"
        style={{ backgroundColor: green[700], height: '100px' }}
      ></div>
    )
  },
  {
    id: 5,
    name: 'Blue',
    icon: (
      <div
        className="w-100"
        style={{ backgroundColor: blue[900], height: '100px' }}
      ></div>
    )
  },
  {
    id: 6,
    name: 'Purple',
    icon: (
      <div
        className="w-100"
        style={{ backgroundColor: purple[800], height: '100px' }}
      ></div>
    )
  },
  {
    id: 7,
    name: 'Pink',
    icon: (
      <div
        className="w-100"
        style={{ backgroundColor: pink[200], height: '100px' }}
      ></div>
    )
  },
  {
    id: 8,
    name: 'Brown',
    icon: (
      <div
        className="w-100"
        style={{ backgroundColor: brown[500], height: '100px' }}
      ></div>
    )
  },
  {
    id: 9,
    name: 'Black',
    icon: (
      <div className="w-100" style={{ backgroundColor: 'black', height: '100px' }}></div>
    )
  }
];
