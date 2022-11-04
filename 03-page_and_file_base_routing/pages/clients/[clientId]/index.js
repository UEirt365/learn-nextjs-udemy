import { useRouter } from "next/router";

export default function ClientDetailPage() {
  const router = useRouter();
  return (
    <div>
      <h1>The ClientDetailPage of [{router.query.clientId}]</h1>
    </div>
  );
}
