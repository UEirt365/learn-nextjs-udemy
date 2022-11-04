import { useRouter } from "next/router";

export default function BlogPosts() {
  const route = useRouter();
  console.log(route.query);
  return (
    <div>
      <h1>The BlogPosts</h1>
    </div>
  );
}
