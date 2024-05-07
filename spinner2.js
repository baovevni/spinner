const spinners = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n'];
let interval = 100;
for (const spinner of spinners) {
  setTimeout(() => {
    process.stdout.write(spinner);
  }, interval += 200);
};
