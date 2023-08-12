const fs = require("fs");

const quote = "Make everyday a little less ordinarily";

// fs.writeFile("cool.txt", quote, () => {
//   console.log("Completed writing cool.txt file");
// });

// fs.readFile("awesome.html", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error ❌", err);
//   }
//   console.log("The content of the file is => ", data);
// });
// const quote2 = "\nImagine the Impossible🚀";

// fs.appendFile("./nice.txt", quote2, () => {
//   console.log("Completed writing");
// });

fs.unlink("./deleteMe.txt", (err) => {
  if (err) throw err;
  console.log("File deleted successfully");
});
