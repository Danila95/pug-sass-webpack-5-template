const fs = require('fs');
const pathFrom = 'C:\/Library\/projects\/new-layout-staff-tpu-ru\/prod\/index.html';
const pathTo = 'C:\/Users\/ddb4\/Desktop\/index.html';

fs.copyFile(pathFrom, pathTo, (err) => {
  if (err) throw err;
  console.log('index.html was copied');
});