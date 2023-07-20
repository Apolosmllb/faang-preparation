// node --watch test.js

const whoIsTheRoot = (nodes) => {
  const idsSet = new Set(nodes.map((node) => node.id));
  return nodes.find((node) => !idsSet.has(node.parentId)) ?? null;
};

const param = [
  { id: 1, parentId: 2 },
  { id: 3, parentId: 2 },
  { id: 2, parentId: 5 },
];

console.log("🚀 ~ whoIsTheRoot(param):", whoIsTheRoot(param));
