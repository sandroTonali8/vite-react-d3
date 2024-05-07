import Yaxis from './components/Y-axis';
import Xaxis from './components/X-axis';
import { x, y, marginLeft, marginTop, maxY } from './components/constants';

export default function App() {
  return (
    <svg>
      <Xaxis x={x} marginTop={marginTop} maxY={maxY}/>
      <Yaxis y={y} marginLeft={marginLeft}/>
    </svg>
  )
}
