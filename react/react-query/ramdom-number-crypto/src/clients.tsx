import { useQuery } from "@tanstack/react-query";
import { getClientsFromAxios } from "./useClients";

export const Clients = () => {
  const clientsQuery = useQuery({
    queryKey: ["clients"],
    queryFn: getClientsFromAxios,
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <h2>Testing</h2>
      {clientsQuery.isLoading ? (
        <h5>Loading...</h5>
      ) : clientsQuery.error ? (
        <h6>{clientsQuery.error.message}</h6>
      ) : (
        clientsQuery.data?.map((client) => (
          <div
            key={client.name}
            style={{
              background: "#C5C5C5",
              margin: "0.1rem",
              width: "12rem",
              padding: "0.5rem",
            }}
          >
            <h4>Name: {client.name}</h4>
            <h4>Age: {client.age}</h4>
            <h4>Street: {client.address.street}</h4>
          </div>
        ))
      )}
    </div>
  );
};
