import { useEffect, useState } from "react";

// import IconList from "./IconList";
import Iconsearch from "./Iconsearch";




function App() {

  // const [icon, setIcon] = useState([])

  // useEffect(() => {
  //   const fetchIcon = async () => {
  //     const response = await fetch('icon.json')
  //     const data = await response.json()
  //     setIcon(data)
  //   }
  //   fetchIcon()
  // }, [])

  return (
    <div className="App">
      {/* <IconList icons={icon} /> */}
      <Iconsearch/>
    </div>
  );
}

export default App;
