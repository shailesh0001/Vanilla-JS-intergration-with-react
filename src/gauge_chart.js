
import React, { useEffect, useRef } from "react";

const Gauge = ({ style, options, max, min, value, animationSpeed }) => {
  const gaugeContainer = useRef();

  useEffect(() => {
    const defaultOptions = {
      angle: -0.2, // The span of the gauge arc
      radiusScale: 1, // Relative radius
      pointer: {
        length: 0.4, // // Relative to gauge radius
        strokeWidth: 0.024, // The thickness
        color: '#000000' // Fill color
      },
      renderTicks: {
          divisions: 5,
          divWidth: 0.8,
          divLength: 0.7,
          divColor: '#333333',
          subDivisions: 3,
          subLength: 0.5,
          subWidth: 0.6,
          subColor: '#666666'
      },
      lineWidth: 0.10,
      limitMax: false,     // If false, max value increases automatically if value > maxValue
      limitMin: false,     // If true, the min value of the gauge will be fixed
      colorStart: '#6FADCF',   // Colors
      colorStop: '#8FC0DA',    // just experiment with them
      strokeColor: [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],  // to see which ones work best for you
      generateGradient: true,
      highDpiSupport: true,     // High resolution support
      staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 200}, // Red from 100 to 130
        {strokeStyle: "#30B32D", min: 200, max: 900}, // Green
        {strokeStyle: "#FFDD00", min: 900, max: 1000}, // Yellow
      ]
    };

    if (gaugeContainer) {
      const gauge = new window.Gauge(gaugeContainer.current);
      gauge.setOptions(options || defaultOptions);
      gauge.maxValue = max || 3000; // set max gauge value
      gauge.setMinValue(min || 0);  // Prefer setter over gauge.minValue = 0
      gauge.animationSpeed = animationSpeed || 32; // set animation speed (32 is default value)
      gauge.set(value || 1250); // set actual value
    }
  }, [ options, max, min, value, animationSpeed]);

  return (
    <canvas ref={gaugeContainer} style={style} />
  );
};

export default Gauge;
