/* exported getInspirations, initDesign, renderDesign, mutateDesign */


function getInspirations() {
  return [
    {
      name: "Astroworld", 
      assetUrl: "https://cdn.glitch.global/60a4b4f0-a0b7-4aec-906c-e7ef86b2b765/astroworld.jpg?v=1715116999207",
      credit: "Astroworld, Travis Scott, 2018"
    },
    {
      name: "Her Loss", 
      assetUrl: "https://cdn.glitch.global/60a4b4f0-a0b7-4aec-906c-e7ef86b2b765/her_loss.jpg?v=1715117003047",
      credit: "Her Loss, Drake, OVO Sound, 2022"
    },
    {
      name: "Scary Hours", 
      assetUrl: "https://cdn.glitch.global/60a4b4f0-a0b7-4aec-906c-e7ef86b2b765/scary_hours.jpg?v=1715116994580",
      credit: "For All The Dogs: Scary Hours Edition, Drake, OVO Sound, 2023"
    },
  ];
}

function initDesign(inspiration) {
  resizeCanvas(inspiration.image.width / 4, inspiration.image.height / 4);
  
  // Initialize design parameters based on the inspiration
  let design = {
    // Example parameters, adjust as needed
    bg: 128,
    fg: []
  }
  
  // Example: Initialize foreground objects
  for(let i = 0; i < 100; i++) {
    design.fg.push({
      x: random(width),
      y: random(height),
      w: random(width / 2),
      h: random(height / 2),
      fill: random(255)
    });
  }
  
  return design;
}

function renderDesign(design, inspiration) {
  // Clear the canvas
  background(design.bg);
  noStroke();
  
  // Render foreground objects
  for(let box of design.fg) {
    fill(box.fill, 128);
    rect(box.x, box.y, box.w, box.h);
  }
}


function mutateDesign(design, inspiration, rate) {
  // Mutate background color
  design.bg = mut(design.bg, 0, 255, rate);
  
  // Mutate foreground objects
  for(let box of design.fg) {
    box.fill = mut(box.fill, 0, 255, rate);
    box.x = mut(box.x, 0, width, rate);
    box.y = mut(box.y, 0, height, rate);
    box.w = mut(box.w, 0, width / 2, rate);
    box.h = mut(box.h, 0, height / 2, rate);
  }
}

// Utility function for mutation
function mut(num, min, max, rate) {
  return constrain(randomGaussian(num, (rate * (max - min)) / 10), min, max);
}
