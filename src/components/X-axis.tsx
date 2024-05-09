import { axisBottom } from 'd3-axis';
import { select } from 'd3-selection';
import { useRef, useEffect } from 'react';
import { scaleValue } from './constants';

interface XaxisProps {
  x: any;
  maxY: number;
  minY: number;
  marginTop: number;
  height: number;
}

export default function Xaxis({ x, maxY, minY, marginTop, height }: XaxisProps) {
  const ref = useRef<SVGGElement>(null)

  useEffect(() => {
    if (ref.current) {
      const svg = select(ref.current);
      svg.attr('transform', `translate(0, ${marginTop + maxY * scaleValue})`)
         .call(axisBottom(x).tickSizeOuter(0));
    }
  }, [x, marginTop, maxY, minY, height]);

  return (
    <g ref={ref}/>
  )
}