//import useState
import { useState } from "react";

//import Receipt component
import Receipt from "./components/Receipt";

//import receipt record as records
import records from "./data/record";


function App() {
  //set up state
  //initial state set to recordsy
  const [receipts, setReceipts] = useState(records);

  // console.log(receipts)

  //.map on receipts state variable
  //pass each receipt record as props to Receipt component
  //.map saved to const info
  //return div with {info}
  const info = receipts.map((receipt, index) => {
    return (
      <Receipt receipt={receipt} key={index} />
    )
  })
  // must return inside of map function
return (
  <div>
    {info}
  </div>
)


}

export default App;
