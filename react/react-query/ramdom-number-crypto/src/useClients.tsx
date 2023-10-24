import { Client, clients } from "./data";

export const getClientsFromAxios = async (): Promise<Client[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return clients;
};
