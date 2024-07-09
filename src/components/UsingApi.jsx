import React, { useEffect, useState} from "react";

function UsingApi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((json) => setData(json?.users));
  }, []);
  return (
    <>
      <div>
        {data ? (
          <div>
            {data.map((e) => (
              <div key={e.id}> 
                <div>
                  <img src={e.image} height={100} width={100} />
                  <div>First Name: {e.firstName} </div>
                  <div>Maiden Name:{e.maidenName}</div>
                  <div>Last Name:{e.lastName}</div>
                  <div>Gender: {e.gender}</div>
                  <div>Age: {e.age}</div>
                  <div>DOB: {e.birthDate}</div>
                  <div>E-mail: {e.email}</div>
                  <div>Username: {e.username}</div>
                  <div>Phone: {e.phone}</div>
                  <div>Height: {e.height}</div>
                  <div>Weight: {e.weight}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default UsingApi;
