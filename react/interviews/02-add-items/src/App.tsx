import "./App.css";

import { Item } from "./compoments/Item";
import { useItems } from "./hooks/useItems";
import { useSEO } from "./hooks/useSEO";

export function getControl(control: any) {
  const isControl = control instanceof HTMLInputElement;
  if (!isControl || control == null) return null;
  return control;
}

function App() {
  const { items, addItem, removeItem } = useItems();
  useSEO({
    title: ` ${
      items.length > 0 ? +items.length + "🔔 " : ""
    } React tecnic interview`,
    description: "Add and delete elements from a list",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { elements } = event.currentTarget;

    const input = getControl(elements.namedItem("item"));
    if (!input) return;

    addItem(input.value);
    input.value = "";
  };

  const createHandleRemove = (itemId: string) => () => {
    removeItem(itemId);
  };

  return (
    <main>
      <aside>
        <h1>React tecnic interview</h1>
        <h2>Add and delete elements from a list</h2>
        <form onSubmit={handleSubmit} aria-label="Add elements to the list">
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
        <h2>List Elements: </h2>
        {items.length === 0 ? (
          <p>
            <strong>Empty list</strong>
          </p>
        ) : (
          <ul>
            {items.map((item) => (
              <Item
                handleRemove={createHandleRemove(item.id)}
                {...item}
                key={item.id}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
