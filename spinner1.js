setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|   \n'); 
}, 900);

// I implemented follwoing functionality right away:

// const spinners = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n'];
// let interval = 100;
// for (const spinner of spinners) {
//   setTimeout(() => {
//     process.stdout.write(spinner);
//   }, interval += 200);
// };