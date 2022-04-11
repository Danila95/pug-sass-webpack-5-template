const replace = require('replace-in-file');
const fs = require('fs');
const path = require('path');
const pathFrom = 'C:\/Library\/projects\/new-layout-staff-tpu-ru\/prod\/main.css';
const pathTo = 'C:\/Users\/ddb4\/openserver_5.2.9\/domains\/staff\/frontstaff\/assets\/src\/css\/staff-style.css';

const results = replace.sync({
    files: pathFrom,
    from: [/url\(fonts/g, /url\(images/g ],
    to: ['url(/fonts', 'url(/images'],
  });
  
  console.log(results);

// File main.css will be created or overwritten by default.
fs.copyFile(pathFrom, pathTo, (err) => {
  if (err) throw err;
  console.log('main.css was copied to main-style.css');
});