import fs from "fs";
import path from "path";

export default function ProductDetail(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  return JSON.parse(fs.readFileSync(filePath));
}

export async function getStaticProps(context) {
  const data = await getData();

  const { params } = context;
  const productId = params.pid;

  const product = data.products.filter((p) => p.id === productId)[0];

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: pathsWithParams,
    fallback: false,
  };
}
