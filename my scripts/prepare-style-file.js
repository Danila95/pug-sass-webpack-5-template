const replace = require('replace-in-file');
const fs = require('fs');
const path = require('path');
const directory = 'C:\/Users\/ddb4\/openserver_5.2.9\/domains\/itr\/frontitr\/web\/assets';
const dontDel = '.gitignore';

const results = replace.sync({
    files: 'C:\/Library\/projects\/engineering_it-school\/prod\/main.css',
    from: [/url\(fonts/g, /url\(img/g ],
    to: ['url(/fonts', 'url(/img'],
  });
  
  console.log(results);


// File main.css will be created or overwritten by default.
fs.copyFile('C:\/Library\/projects\/engineering_it-school\/prod\/main.css', 'C:\/Users\/ddb4\/openserver_5.2.9\/domains\/itr\/frontitr\/assets\/src\/css\/style-main.css', (err) => {
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