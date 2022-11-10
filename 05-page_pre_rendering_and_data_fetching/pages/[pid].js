export default function ProductDetail(props) {
  const { loadedProduct } = props;
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
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const data = JSON.parse(fs.readFileSync(filePath));

  const product = data.filter((p) => p.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}
