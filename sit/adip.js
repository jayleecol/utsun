   const fs = require('fs');

   // Specify the file path
   const filePath = 'aligned_data.json';

   // Write JSON string to file
   fs.writeFileSync(filePath, jsonData);

   console.log('Aligned JSON data has been saved to', filePath);
   