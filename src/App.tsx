import Yaxis from './components/Y-axis';
import Xaxis from './components/X-axis';
import Svg from './components/Svg';
import Unit from './components/Unit';
import { x, y, marginLeft, marginTop, maxY, dataX, dataY, unitY } from './components/constants';

export default function App() {
  return (
    <svg>
      <Svg x={x} marginTop={marginTop} maxY={maxY} y={y} dataX={dataX} dataY={dataY}/>
      <Xaxis x={x} marginTop={marginTop} maxY={maxY}/>
      <Yaxis y={y} marginLeft={marginLeft}/>
      <Unit unit={unitY}/>
    </svg>
  )
}
