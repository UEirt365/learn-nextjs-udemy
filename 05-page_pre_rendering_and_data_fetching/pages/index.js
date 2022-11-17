import fs from "fs";
import Link from "next/link";
import path from "path";

function HomePage(props) {
  return (
    <ul>
      {props.products.map((product) => {
        return (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath));
  return {
    props: {
      products: jsonData.products,
    },
    revalidate: 10,
    // notFound: true,
    // redirect: {
    //   destination: "/no-data",
    // },
  };
}

export default HomePage;
