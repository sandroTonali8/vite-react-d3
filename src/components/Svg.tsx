import { useEffect, useRef } from 'react';
import { select } from 'd3-selection';

interface SvgProps {
  x: any;
  y: any;
  maxY: number;
  marginTop: number;
  dataX: string[];
  dataY: number[];
}

export default function Svg({ x, y, maxY, marginTop, dataX, dataY }: SvgProps) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (ref.current) {
      const svg = select(ref.current);
      svg.selectAll('rect')
       .data(dataY)
       .enter()
       .append("rect")
       .style("fill","steelblue" )
       .attr("x",(_d,i)=> x(dataX[i]) as number)
       .attr("y",d => maxY - (y(d) - marginTop) > 0 ? y(d) : maxY + marginTop )
       .attr("width", x.bandwidth())
       .attr("height",d => Math.abs(maxY - (y(d) - marginTop)) );
    }
  }, [x, y, maxY, marginTop, dataX, dataY])

  return (
    <svg ref={ref}/>
  )
}