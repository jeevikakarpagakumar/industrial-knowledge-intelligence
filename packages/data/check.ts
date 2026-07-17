import { CORPUS } from "./src/corpus";

console.log("=== Corpus Check ===");
console.log(`Total Documents: ${CORPUS.length}`);

const tagCounts: { [tag: string]: number } = {};
const under100Words: { id: string; wordCount: number }[] = [];

for (const doc of CORPUS) {
  // Count equipment tags
  for (const tag of doc.equipmentTags) {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  }

  // Count words
  const words = doc.content.trim().split(/\s+/);
  const wordCount = words.length;
  if (wordCount < 100) {
    under100Words.push({ id: doc.id, wordCount });
  }
}

console.log("\nUnique Equipment Tags & Reference Counts:");
const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
for (const [tag, count] of sortedTags) {
  console.log(`- ${tag}: ${count} document(s)`);
}

console.log("\nDocuments with fewer than 100 words:");
if (under100Words.length === 0) {
  console.log("None");
} else {
  for (const item of under100Words) {
    console.log(`- ${item.id}: ${item.wordCount} words`);
  }
}
