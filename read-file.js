import { open } from "node:fs/promises";

let filehandle;
try {
  filehandle = await open("newfile.txt", "r");
  for await (const line of filehandle.readLines()) {
    console.log(line);
  }
} finally {
  await filehandle?.close();
}
