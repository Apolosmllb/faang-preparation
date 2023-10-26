export type Product = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  name: string;
  price: number;
  timestamp: number;
  description: string;
};

export const data: Product[] = [
  {
    id: crypto.randomUUID(),
    name: "Laptop 👨‍💻",
    price: 1000,
    timestamp: Date.now(),
    description: "This is a laptop",
  },
  {
    id: crypto.randomUUID(),
    name: "Mobile 📴",
    price: 500,
    timestamp: Date.now(),
    description: "This is a mobile",
  },
  {
    id: crypto.randomUUID(),
    name: "Tablet 📱",
    price: 300,
    timestamp: Date.now(),
    description: "This is a tablet",
  },
];
