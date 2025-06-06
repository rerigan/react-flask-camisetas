import { useEffect, useState } from "react";
import "./App.css";

function App() {
  interface Camiseta {
    name: string;
    size: string;
    price: number;
  }
  interface DataResponse {
    camisetas: Camiseta[];
  }
  const [data, setData] = useState<DataResponse | null>(null);
  useEffect(() => {
    fetch("https://react-flask-camisetas.onrender.com/tshirts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <div>
        
        <div id="container-camisetas">
        <h1>Camisetas do Tonhão</h1>
          <h2>Camisetas disponíveis: </h2>
        
        <div>
          {data === null ? (
            <p>Loading...</p>
          ) : (
            data.camisetas.map((camiseta, i) => (
              <p key={i}>
                {camiseta.name} — {camiseta.size} — R${camiseta.price}
              </p>
            ))
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
