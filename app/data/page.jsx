"use client";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";

const Data = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setstate(res?.data?.list))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      {state?.map((item) => (
        <div
          key={item.id}
          style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}
        >
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
