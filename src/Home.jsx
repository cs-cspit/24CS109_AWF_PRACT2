import { useState } from "react";

function Home() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"} Info
      </button>

      {showInfo && <p>Welcome to my Portfolio Website.</p>}
      <p> This is 24CS109 Kashyap Nasit </p>
    </div>
  );
}

export default Home;
