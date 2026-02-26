import React from "react";
import Card from "./components/Card";
const App = () => {
  const user = "Krishna";
  return (
    <div>
      <h2>Hello I am {user}</h2>
      <h1>Vivaan Garg is Infinite</h1>
      <h2>He can Do Anything</h2>
      <div className="card-container">
        <Card
          user="Vivaan"
          age={20}
          Profession="Full-Stack Developer"
          src="https://images.unsplash.com/photo-1515348152804-f0a800ce7f7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZmluaXR5fGVufDB8fDB8fHww"
        ></Card>
        <Card
          user="Ram"
          age={19}
          Profession="Computer Science Student"
          src="https://media.istockphoto.com/id/2189888755/photo/ram-statue-of-gujarat.webp?a=1&b=1&s=612x612&w=0&k=20&c=mbdSopcw0m6VLo0AZM6uS4P5jEcGRK22etnyvjpvw6w="
        />
        <Card
          user="Aarav"
          age={22}
          Profession="UI/UX Designer"
          src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=600"
        />

        <Card
          user="Kabir"
          age={25}
          Profession="Digital Marketer"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600"
        />
      </div>
    </div>
  );
};

export default App;
