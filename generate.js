import fs from "fs";
import path from "path";
import MiniSearch from "minisearch";

function getAllFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getAllFiles(fullPath);
    }

    return [fullPath];
  });
}

let miniSearch = new MiniSearch({
  fields: ["title", "body"],
  storeFields: ["title", "body"],
  tokenize: (s) => s.split(/[^a-zA-Z0-9一-龠ぁ-んァ-ヶ]+/),
});

const docsDir = "./docs/notes";
const files = getAllFiles(docsDir);

let docs = files
  .filter((f) => f.endsWith(".md"))
  .map((f) => ({
    id: path.relative("docs", f),
    title: path.basename(f).replace(".md", ""),
    body: fs.readFileSync(f, "utf8"),
  }));

miniSearch.addAll(docs);

fs.writeFileSync("docs/assets/index.json", JSON.stringify(miniSearch.toJSON()));

console.log("index.json generated!");
