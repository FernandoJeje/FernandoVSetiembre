import { useState, useEffect } from "react";

const Usuarios = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) =>
        data.results.map((user) => setUsers((prevState) => user, ...prevState))
      );
  }, []);

  console.log("usuarios", users);

  return (
    <div>
      {users.map((user) => {
        // <>
        <p>{user.name.first}</p>;
        {
          /* <p>{user.email}</p>
          <p>{user.location.country}</p>
          <img src={user.picture.large}></img>
        </>; */
        }
      })}
    </div>
  );
};

export default Usuarios;
