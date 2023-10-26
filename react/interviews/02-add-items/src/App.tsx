import "./App.css";
import { useState } from "react";
import { Product, data } from "./data";

export function getControl(control: any) {
  const isControl = control instanceof HTMLInputElement;
  if (!isControl || control == null) return null;
  return control;
}

function App() {
  const [items, setItems] = useState<Product[]>(data);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;

    const input = getControl(elements.namedItem("item"));
    if (!input) return;

    const newItemPayload: Product = {
      id: crypto.randomUUID(),
      name: input.value,
      price: 44343,
      timestamp: Date.now(),
      description: `This is a ${input.value}`,
    };

    setItems((prevItems) => [...prevItems, newItemPayload]);
  };

  const createHandleRemove = (itemId: string) => () => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <main>
      <aside>
        <h1>React tecnic interview</h1>
        <h2>Add and delete elements from a list</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Element to introduce:
            <input
              name="item"
              required
              type="text"
              placeholder=" video games 🎮"
              autoComplete="off"
            />
          </label>
          <button>Add element to list</button>
        </form>
      </aside>
      <section>
        <h3>List Elements: </h3>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <button onClick={createHandleRemove(item.id)}>⛔</button>
              {item.name} $/.{item.price}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
