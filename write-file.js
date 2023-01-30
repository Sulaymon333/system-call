import fs from "fs";

const content = "Learning about writing to file in NodeJS";

// writeFile function with filename, content and callback function
fs.writeFile("newfile.txt", content, function (err) {
  if (err) throw err;
  console.log("File is created successfully.");
});
