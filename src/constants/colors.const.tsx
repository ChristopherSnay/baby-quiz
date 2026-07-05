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
      <div className="ratio ratio-1x1 w-100" style={{ backgroundColor: red[700] }}></div>
    )
  },
  {
    id: 2,
    name: 'Orange',
    icon: (
      <div
        className="ratio ratio-1x1 w-100"
        style={{ backgroundColor: orange[700] }}
      ></div>
    )
  },
  {
    id: 3,
    name: 'Yellow',
    icon: (
      <div
        className="ratio ratio-1x1 w-100"
        style={{ backgroundColor: yellow[600] }}
      ></div>
    )
  },
  {
    id: 4,
    name: 'Green',
    icon: (
      <div
        className="ratio ratio-1x1 w-100"
        style={{ backgroundColor: green[700] }}
      ></div>
    )
  },
  {
    id: 5,
    name: 'Blue',
    icon: (
      <div className="ratio ratio-1x1 w-100" style={{ backgroundColor: blue[900] }}></div>
    )
  },
  {
    id: 6,
    name: 'Purple',
    icon: (
      <div
        className="ratio ratio-1x1 w-100"
        style={{ backgroundColor: purple[800] }}
      ></div>
    )
  },
  {
    id: 7,
    name: 'Pink',
    icon: (
      <div className="ratio ratio-1x1 w-100" style={{ backgroundColor: pink[200] }}></div>
    )
  },
  {
    id: 8,
    name: 'Brown',
    icon: (
      <div
        className="ratio ratio-1x1 w-100"
        style={{ backgroundColor: brown[500] }}
      ></div>
    )
  },
  {
    id: 9,
    name: 'Black',
    icon: (
      <div className="ratio ratio-1x1 w-100" style={{ backgroundColor: 'black' }}></div>
    )
  }
];
