import Link from "next/link";

export default function ClientPage() {
  const clients = [
    { id: "1", name: "Client 1" },
    { id: "2", name: "Client 2" },
    { id: "3", name: "Client 3" },
  ];
  return (
    <div>
      <h1>The ClientPage</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link
                href={{
                  pathname: "clients/[clientId]",
                  query: {
                    clientId: client.id,
                  },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
