import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const Chart: React.FC = () => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const data = [10, 20, 30, 40, 50];
    const width = 200;
    const height = 100;

    svg.attr("width", width).attr("height", height);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 40)
      .attr("y", (d) => height - d)
      .attr("width", 35)
      .attr("height", (d) => d)
      .attr("fill", "teal");
  }, []);

  return <svg ref={ref} />;
};

export default Chart;
