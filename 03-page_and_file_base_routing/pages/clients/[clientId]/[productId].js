import { useRouter } from "next/router";

export default function ProductClientPage() {
  const router = useRouter();
  return (
    <div>
      <h1>
        The product [{router.query.productId}] of client [
        {router.query.clientId}]
      </h1>
    </div>
  );
}
