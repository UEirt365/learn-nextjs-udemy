import { useEffect, useState } from "react";

export default function LastSales() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://fir-app-demo-55852-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json"
    )
      .then((response) => response.json())
      .then((data) => {
        let transformedSales = [];
        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setIsLoading(false);
        setSales(transformedSales);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!sales) {
    return <p>No data found!</p>;
  }

  return (
    <ul>
      {sales.map((sale) => {
        return <li key={sale.id}>{`${sale.username} - ${sale.volume}`}</li>;
      })}
    </ul>
  );
}
