import { copyFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const clientDir = path.resolve("dist", "client");
const indexHtml = path.join(clientDir, "index.html");
const notFoundHtml = path.join(clientDir, "404.html");
const noJekyll = path.join(clientDir, ".nojekyll");
const serverEntry = path.resolve("dist", "server", "index.js");
const basePath = "/vasu-super-tailors/";

const serverModule = await import(pathToFileURL(serverEntry).href);
const response = await serverModule.default.fetch(
  new Request(`http://localhost${basePath}`),
  {},
  {},
);

if (!response.ok) {
  throw new Error(`Static export failed with ${response.status} ${response.statusText}`);
}

await writeFile(indexHtml, await response.text());
await copyFile(indexHtml, notFoundHtml);
await writeFile(noJekyll, "");
