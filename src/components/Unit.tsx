import { select } from 'd3-selection';
import { useEffect, useRef } from 'react';

interface UnitProps {
  unit: string;
}

export default function Unit({ unit }: UnitProps) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (ref.current) {
      const svg = select(ref.current);
      svg.append('text')
       .attr('x', 25)   
       .attr('y', 10)   
       .attr('dy', '.35em')  
       .style('text-anchor', 'middle')  
       .style('font-size', 10)
       .style('fill', 'black')
       .style('z-index', 1) 
       .text(unit);  
    }
  },[unit])

  return (
    <svg ref={ref}/>
  )
}