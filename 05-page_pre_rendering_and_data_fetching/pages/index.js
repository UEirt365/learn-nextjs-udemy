function HomePage(props) {
  return (
    <ul>
      {props.products.map((product) => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </ul>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: [{ id: "p1", title: "Product 1" }],
    },
  };
}

export default HomePage;
