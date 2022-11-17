import { useEffect, useState } from "react";
import useSWR from "swr";

export default function LastSales(props) {
  const [sales, setSales] = useState(props.sales);

  const { data, error } = useSWR(
    "https://fir-app-demo-55852-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  if (error) {
    return <p>No data found!</p>;
  }
  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => {
        return <li key={sale.id}>{`${sale.username} - ${sale.volume}`}</li>;
      })}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://fir-app-demo-55852-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json"
  );
  const data = await response.json();
  let transformedSales = [];
  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: {
      sales: transformedSales,
    },
  };
}
