import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("Volkan");
  const [age, setAge] = useState(25);
  const [array, setArray] = useState(["Volkan", "Ahmet", "Mehmet"]);
  return (
    <div >
      <h1>
        Selamlar {name} Yaşın {age}
      </h1>
      <button onClick={() => setName("Ahmet")}>Change Name</button>

      <button onClick={() => setAge(30)}>Change Age</button>
      {
        array.map((value, index) => {
          return (
            <>
              <h1 key={index}>{value}</h1>

            </>

          )
        })
      }
      <button onClick={() => setArray([...array, "new Element"])}>Add New Element</button>
    </div>

  );
}

export default App;
