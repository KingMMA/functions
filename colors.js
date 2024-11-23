function TrafficLight(trafficLightName) {
    let currentColorIndex = 0;
    const colors = ['green', 'yellow', 'red'];
    
    return function() {
      const currentColor = colors[currentColorIndex];
      console.log(`%c${trafficLightName}: ${currentColor}`, `background: ${currentColor}; color: white;`);
      currentColorIndex = (currentColorIndex + 1) % colors.length;
    };
  }

const TrafficLightObj = TrafficLight('Kyiv Traffic Light');
