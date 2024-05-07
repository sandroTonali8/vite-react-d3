import { axisLeft } from 'd3-axis';
import { select } from 'd3-selection';
import { useRef, useEffect } from 'react';

interface YaxisProps {
  y: any;
  marginLeft: number;
}

export default function Yaxis({ y, marginLeft }: YaxisProps) {
  const ref = useRef<SVGGElement>(null)

  useEffect(() => {
    if (ref.current) {
      const svg = select(ref.current);
      svg.attr('transform', `translate(${marginLeft}, 0)`)
         .call(axisLeft(y));
    }
  }, [y, marginLeft]);

  return (
    <g ref={ref}/>
  )
}