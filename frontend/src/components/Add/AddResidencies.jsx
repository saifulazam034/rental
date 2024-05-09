import React from "react";
import "./AddResidencies.css";
const AddResidencies = () => {
  const [image, setImage] = React.useState("");
  const [mosque, setMosque] = React.useState("true");
  const [hospital, setHospital] = React.useState("true");
  const [school, setSchool] = React.useState("true");
  const [college, setCollege] = React.useState("true");
  const [watchman, setWatchman] = React.useState("true");
  const [busstop, setBusstop] = React.useState("true");
  const [gasline, setGasline] = React.useState("true");
  const [electricity, setElectricity] = React.useState("true");
  const [name, setName] = React.useState("");
  const [phone, setNumber] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescripton] = React.useState("");
  const [rent, setRent] = React.useState("");
  const [city, setCity] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [bed, setBeds] = React.useState("");
  const [bath, setBathroom] = React.useState("");
  const [kitchen, setKitchen] = React.useState("");
  const [car, setCarparking] = React.useState("");

  const AddResidencies = async () => {
    console.warn(
      name,
      phone,
      description,
      title,
      address,
      image,
      rent,
      city,
      school,
      college,
      gasline,
      electricity,
      mosque,
      hospital,
      watchman,
      busstop,
      bed,
      bath,
      kitchen,
      car
    );
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userId._id);
    let result = await fetch("http://localhost:5000/Residencies", {
      method: "post",
      body: JSON.stringify({
        name,
        phone,
        description,
        title,
        address,
        image,
        rent,
        city,
        school,
        college,
        gasline,
        electricity,
        mosque,
        hospital,
        watchman,
        busstop,
        bed,
        bath,
        kitchen,
        car,
        userId,
      }),
      headers: {
        "constent-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };
  return (
    <div>
      <h1 className="addheader">Add Residencies</h1>
      <form>
        <input
          className="file"
          type="file"
          name="file"
          onChange={(e) => {
            setImage(e.target.name);
          }}
        />
        <p className="primaryText">Landlord/Name/Phone:No</p>
        Name:
        <input
          className="land"
          type="text"
          placeholder="enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        Phone NO:{" "}
        <input
          className="land"
          type="number"
          placeholder="enter contact no"
          value={phone}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <lu>
          <li>
            <b>Titil:</b>
            <input
              className="title"
              type="text"
              placeholder="write titil"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </li>
          <li>
            <b> Description:</b>
            <input
              className="descrip"
              type="text"
              placeholder="write description"
              value={description}
              onChange={(e) => {
                setDescripton(e.target.value);
              }}
            />
          </li>
          <li>
            <b>Rent:</b>
            <input
              className="rent"
              type="text"
              placeholder="Enter rent"
              value={rent}
              onChange={(e) => {
                setRent(e.target.value);
              }}
            />
          </li>
          <li>
            <b>City:</b>
            <input
              className="city"
              type="text"
              placeholder="Enter city name "
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </li>
          <li>
            {" "}
            <b>Address:</b>
            <input
              className="address"
              type="text"
              placeholder="Enter complete address "
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </li>
        </lu>
        <h3>Facilities</h3>
        Beds:
        <input
          className="facility"
          type="numbr"
          value={bed}
          onChange={(e) => {
            setBeds(e.target.value);
          }}
        />
        Bathroom:{" "}
        <input
          className="facility"
          type="numbr"
          value={bath}
          onChange={(e) => {
            setBathroom(e.target.value);
          }}
        />
        Carparking:
        <input
          className="facility"
          type="text"
          value={car}
          onChange={(e) => {
            setCarparking(e.target.value);
          }}
        />
        Kitchen:
        <input
          className="facility"
          type="numbr"
          value={kitchen}
          onChange={(e) => {
            setKitchen(e.target.value);
          }}
        />
        <lu>
          <li>
            <input
              className="check"
              type="checkbox"
              value={gasline}
              onChange={(e) => {
                setGasline(e.target.value);
              }}
            />
            Gasline
          </li>
          <li>
            <input
              className="check"
              type="checkbox"
              value={electricity}
              onChange={(e) => {
                setElectricity(e.target.value);
              }}
            />
            electricity
          </li>
        </lu>
        <h3>vicinity benefits(within 2 mile)</h3>
        <lu>
          <li>
            <input
              type="checkbox"
              value={mosque}
              onChange={(e) => {
                setMosque(e.target.value);
              }}
            />
            Mosque
          </li>
          <li>
            <input
              type="checkbox"
              value={hospital}
              onChange={(e) => {
                setHospital(e.target.value);
              }}
            />
            Hospital
          </li>
          <li>
            <input
              type="checkbox"
              value={hospital}
              onChange={(e) => {
                setHospital(e.target.value);
              }}
            />
            Hospital
          </li>
          <li>
            <input
              type="checkbox"
              value={busstop}
              onChange={(e) => {
                setBusstop(e.target.value);
              }}
            />
            Bus stop
          </li>
          <li>
            <input
              type="checkbox"
              value={watchman}
              onChange={(e) => {
                setWatchman(e.target.value);
              }}
            />
            Watchman
          </li>
          <li>
            <input
              type="checkbox"
              value={school}
              onChange={(e) => {
                setSchool(e.target.value);
              }}
            />
            School
          </li>
          <li>
            <input
              type="checkbox"
              value={college}
              onChange={(e) => {
                setCollege(e.target.value);
              }}
            />
            College
          </li>
        </lu>
        <button type="submit" onClick={AddResidencies} className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddResidencies;
