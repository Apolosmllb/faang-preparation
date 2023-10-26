import { useState } from "react";
import { Item } from "../data";

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (nameItem: string) => {
    const newItemPayload: Item = {
      id: crypto.randomUUID(),
      name: nameItem,
      price: 44343,
      timestamp: Date.now(),
      description: `This is a ${nameItem}`,
    };
    setItems((prevItems) => [...prevItems, newItemPayload]);
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  return { items, addItem, removeItem };
};
