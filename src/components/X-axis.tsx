import { axisBottom } from 'd3-axis';
import { select } from 'd3-selection';
import { useRef, useEffect } from 'react';

interface XaxisProps {
  x: any;
  maxY: number;
  marginTop: number;
}

export default function Xaxis({ x, maxY, marginTop }: XaxisProps) {
  const ref = useRef<SVGGElement>(null)

  useEffect(() => {
    if (ref.current) {
      const svg = select(ref.current);
      svg.attr('transform', `translate(0, ${marginTop + maxY})`)
         .call(axisBottom(x).tickSizeOuter(0));
    }
  }, [x, marginTop, maxY]);

  return (
    <g ref={ref}/>
  )
}