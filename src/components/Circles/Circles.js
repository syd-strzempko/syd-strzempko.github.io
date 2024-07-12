import styles from './Circles.module.css';
import { Fragment, useState } from 'react';
import { degrees_to_radians, fib } from '../../utility/utils';
import { Circle as KonvaCircle, Stage, Layer } from 'react-konva';

const MOBILE_CUTOFF = 600;

const Circle = ({center, iters=10}) => {
  const [ centerWidth, centerHeight ] = center;
  const calculatePlacement = (i) => {
    if (i === 0) {
      return [[centerWidth,centerHeight]];
    }
    let radius = (centerWidth < MOBILE_CUTOFF/2) ? (i*25) : (i*40);
    let curr = fib(i+3);
    return [...Array(curr)].map((_, j) => {
      let offset = degrees_to_radians(360/(curr-1));
      let angle = degrees_to_radians((360/curr)*(j+1)) + offset;
      return [centerWidth + radius*(Math.cos(angle)), centerHeight + radius*(Math.sin(angle))];
    });
  }
  const calculatePlacements = (i) => {
    const rings = Array(i).fill(0);
    const nestedCoords = rings.map((_, i) => {
      return calculatePlacement(i);
    });
    const unNested = nestedCoords.flat();
    return unNested;
  };

  const placements = calculatePlacements(iters);
  return (
    <Fragment>
      {placements?.map((coord, j) => {
        let [x, y] = coord;
        return <KonvaCircle x={x} y={y} radius={7} fill={"white"} key={j} id={`${j}`} className={styles.circle} />
      })}
    </Fragment>
  );
};

const Circles = () => {
  const [ canvasHeight, setCanvasHeight ] = useState(window.innerHeight);
  const [ canvasWidth, setCanvasWidth ] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setCanvasHeight(window.innerHeight);
    setCanvasWidth(window.innerWidth);
  });

  return (
    <Stage className={styles.stage} width={canvasWidth} height={canvasHeight}>
      <Layer>
        <Circle center={[canvasWidth*.5, canvasHeight*.5]} iters={(canvasWidth < MOBILE_CUTOFF) ? 7 : 9} />
      </Layer>
    </Stage>
  );
};

export default Circles;