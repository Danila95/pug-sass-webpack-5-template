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


//delete all files
// fs.readdir(directory , (err, files) => {
//   // if (err) throw err;
//   for (const file of files) {
//     if (dontDel === file)
//       continue;
//     fs.unlink(path.join(directory, file), err => {
//       // if (err) throw err;
//     });
//   }
// });


// delete directory
// fs.readdir(directory , (err, dirs) => {
//   if (err) throw err;
//   for (const dir of dirs) {
//     if (dontDel === dir)
//       continue;
//     fs.rmdir(path.join(directory, dir), err => {
//       console.log(`${dir} is deleted!`);
//       // if (err) { 
//       //   console.log('-----------------THIS IS .GITIGNORE FILE!!!------------------------');
//       //   throw err;
//       // }
//     });
//   }
// });