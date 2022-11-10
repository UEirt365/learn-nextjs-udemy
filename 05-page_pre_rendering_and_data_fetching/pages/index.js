import path from "path";
import fs from "fs";

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
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath));
  return {
    props: {
      products: jsonData.products,
    },
  };
}

export default HomePage;
