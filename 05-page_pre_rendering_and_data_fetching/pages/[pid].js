import fs from "fs";
import path from "path";

export default function ProductDetail(props) {
  const { loadedProduct } = props;
  console.log({ loadedProduct });
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  console.log({ productId });
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const data = JSON.parse(fs.readFileSync(filePath));

  const product = data.products.filter((p) => p.id === productId)[0];

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } },
      { params: { pid: "p2" } },
      { params: { pid: "p3" } },
    ],
    fallback: false,
  };
}
