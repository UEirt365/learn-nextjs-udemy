import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();

  return (
    <div>
      <h1>The PortfolioProjectPage [{router.query.projectId}]</h1>
    </div>
  );
}
