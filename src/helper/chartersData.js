import { nanoid } from 'nanoid';
import charter1_1x from '../images/charter/charter1_1x.png';
import charter1_2x from '../images/charter/charter1_2x.png';
import charter2_1x from '../images/charter/charter2_1x.png';
import charter2_2x from '../images/charter/charter2_2x.png';
import charter3_1x from '../images/charter/charter3_1x.png';
import charter3_2x from '../images/charter/charter3_2x.png';
import charter4_1x from '../images/charter/charter4_1x.png';
import charter4_2x from '../images/charter/charter4_2x.png';

const chartersData = [
  {
    id: nanoid(),
    img: { src1x: charter1_1x, src2x: charter1_2x },
    title: 'Piaggio P.180 Avanti',
  },
  {
    id: nanoid(),
    img: { src1x: charter2_1x, src2x: charter2_2x },
    title: 'Pilatus PC-12',
  },
  {
    id: nanoid(),
    img: { src1x: charter3_1x, src2x: charter3_2x },
    title: 'piper pa27 aztec',
  },
  {
    id: nanoid(),
    img: { src1x: charter4_1x, src2x: charter4_2x },
    title: 'Beech BE100 King Air',
  },
];

export { chartersData };
