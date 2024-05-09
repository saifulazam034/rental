import React, { useEffect, useState } from "react";

const ResidenciesList = () => {
  const [Residencies, setResidencies] = useState([]);

  useEffect(() => {
    getResidencies();
  }, []);
  const getResidencies = async () => {
    let result = await fetch("http://localhost:5000/Residency");
    result = await result.json();
    setResidencies(result);
  };
  console.log("Residencies", Residencies);
  return (
    <div>
      <h1>Rent houses</h1>
      <lu>
        <li>S .No</li>
        <li>title</li>
        <li>name</li>
        <li>phone</li>
        <li>description</li>
        <li>address</li>
        <li>city</li>
        <li>facilities</li>
        <li>vinicity</li>
        <li>rent</li>
      </lu>
      {Residencies.map((item, index) => (
        <lu>
          <li>{index + 1}</li>
          <li>{item.title}</li>
          <li>{item.name}</li>
          <li>{item.Phone}</li>
          <li>{item.description}</li>
          <li>{item.address}</li>
          <li>{item.city}</li>
          <li>{item.facilities}</li>
          <li>{item.vinicity}</li>
          <li>${item.rent}</li>
        </lu>
      ))}
    </div>
  );
};

export default ResidenciesList;
