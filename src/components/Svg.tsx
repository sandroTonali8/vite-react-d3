import { useEffect, useRef } from 'react';
import { select } from 'd3-selection';
import { scaleValue } from './constants';
import { maxY, marginTop } from './constants';

interface SvgProps {
  x: any;
  y: any;
  maxY: number;
  marginTop: number;
  dataX: string[];
  dataY: number[];
}

const top2xaxis = maxY * scaleValue + marginTop;

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
       .attr("x", (_d,i)=> x(dataX[i]) as number)
       .attr("y", d => y(d) > top2xaxis ? top2xaxis : top2xaxis - Math.abs(y(d) - top2xaxis) )
       .attr("width", x.bandwidth())
       .attr("height", d => Math.abs(y(d) - top2xaxis) );
    }
  }, [x, y, maxY, marginTop, dataX, dataY])

  return (
    <svg ref={ref}/>
  )
}