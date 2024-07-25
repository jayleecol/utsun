const d3 = require('d3-geo');

// Create a stream for a geographic projection
const stream = d3.geoStream(...); // details of stream creation would go here

// Define your coordinates in radians
const pi = Math.PI;
const phi = someLatitudeInRadians;

// Call the point method with transformed coordinates
stream.point(pi * 1, -phi);
