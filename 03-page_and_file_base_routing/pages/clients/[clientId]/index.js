import { useRouter } from "next/router";

export default function ClientDetailPage() {
  const router = useRouter();
  const viewProductHandler = () => {
    router.push({
      pathname: "/clients/[clientId]/[productId]",
      query: {
        clientId: router.query.clientId,
        productId: `productId_client_${router.query.clientId}`,
      },
    });
  };
  return (
    <div>
      <h1>The ClientDetailPage of [{router.query.clientId}]</h1>
      <button onClick={viewProductHandler}>View Product</button>
    </div>
  );
}
