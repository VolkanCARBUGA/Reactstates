import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("Volkan");
  const [age, setAge] = useState(25);
  const [array, setArray] = useState(["Volkan", "Ahmet", "Mehmet"]);
  const [addres,setAddres]=useState({title:"Başlık",setTitle:"Alt Başlık",number:20})
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
      <h2>Adresler</h2>
      <h2>{addres.title}</h2>
      <h2>{addres.setTitle}</h2>
      <h2>{addres.number}</h2>
      <button onClick={() => setAddres({...addres,title:"İstanbul",setTitle:"Başakşehir"})}>Replace</button>
    </div>

  );
}

export default App;
