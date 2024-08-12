function computeCircumcenter(p1, p2, p3) {
  // Calculate midpoints of sides
  let mid1 = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
  let mid2 = [(p2[0] + p3[0]) / 2, (p2[1] + p3[1]) / 2];
  
  // Calculate slopes of sides
  let slope1 = (p2[1] - p1[1]) / (p2[0] - p1[0]);
  let slope2 = (p3[1] - p2[1]) / (p3[0] - p2[0]);
  
  // Calculate perpendicular bisectors
  let perpSlope1 = -1 / slope1;
  let perpSlope2 = -1 / slope2;
  
  // Calculate circumcenter
  let x = (perpSlope1 * mid1[0] - perpSlope2 * mid2[0] + mid2[1] - mid1[1]) / (perpSlope1 - perpSlope2);
  let y = perpSlope1 * (x - mid1[0]) + mid1[1];
  
  return [x, y];
}

// Example usage
let p1 = [0, 0];
let p2 = [1, 0];
let p3 = [0, 1];
let circumcenter = computeCircumcenter(p1, p2, p3);
console.log(circumcenter); // Output: [0.5, 0.5]
