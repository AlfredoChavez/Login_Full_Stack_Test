import { useEffect, useState } from "react";
import { getData } from "../../services/authService";
import { useParams } from "react-router";

export default function DashBoard (){
  const { userId, userName } = useParams();
  const [data, setData] = useState('');

  useEffect( () => {
    (async () => {
      const newData = await getData(userId);
      setData(newData);
    })();
  },[userId]);

  return (
    <>
     <h1>Hello {userName}</h1>
     <h3>This is your data:</h3>
     {data && data.map(quote => {
        return <p key={quote.id}> {quote.data} </p>;
     })}
    </>
  );
}