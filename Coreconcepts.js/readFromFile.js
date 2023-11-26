
const fs = require('fs');


 function fileIsRead(err,fileContent){
   sum(fileContent);
   console.log("file is read gave final answer");
 }

 fs.readFile("hii.txt",'utf8',fileIsRead); 

 /*
 const fs = require('fs');

// File path
const filePath = 'path/to/your/file.txt';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log('File content:', data);
  // You can use 'data' here as per your requirement
});

*/