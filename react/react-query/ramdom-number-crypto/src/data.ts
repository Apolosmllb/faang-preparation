export type Address = {
  street: string;
  city: string;
  country: string;
};

export type Contact = {
  type: string;
  value: string;
};

export type Client = {
  name: string;
  age: number;
  address: Address;
  contacts: Contact[];
};

export const clients: Client[] = [
  {
    name: "Juan Perez",
    age: 30,
    address: {
      street: "Main Street 123",
      city: "City A",
      country: "Country X",
    },
    contacts: [
      { type: "email", value: "juan@example.com" },
      { type: "phone", value: "555-123-4567" },
    ],
  },
  {
    name: "Maria Rodriguez",
    age: 25,
    address: {
      street: "Central Avenue 456",
      city: "City B",
      country: "Country Y",
    },
    contacts: [
      { type: "email", value: "maria@example.com" },
      { type: "phone", value: "555-987-6543" },
    ],
  },
  {
    name: "Carlos Gomez",
    age: 35,
    address: {
      street: "North Boulevard 789",
      city: "City C",
      country: "Country Z",
    },
    contacts: [
      { type: "email", value: "carlos@example.com" },
      { type: "phone", value: "555-456-7890" },
    ],
  },
  {
    name: "Laura Lopez",
    age: 28,
    address: {
      street: "South Street 567",
      city: "City D",
      country: "Country W",
    },
    contacts: [
      { type: "email", value: "laura@example.com" },
      { type: "phone", value: "555-567-1234" },
    ],
  },
  {
    name: "Pedro Ramirez",
    age: 40,
    address: {
      street: "West Avenue 987",
      city: "City E",
      country: "Country V",
    },
    contacts: [
      { type: "email", value: "pedro@example.com" },
      { type: "phone", value: "555-789-2345" },
    ],
  },
];
