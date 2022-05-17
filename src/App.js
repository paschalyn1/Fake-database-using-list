import "./styles.css";
import Comp from "./Comp1.js";
import portal from "./List.js";

export default function App() {
  // const portal = [{
  //   name: "Pascie",
  //   age: "23",
  //   comment: "I love to code!",
  // },
  // {
  //   name: "Barbie",
  //   age: "25",
  //   comment: "I also love to code!",
  // }
  // ]

  export default portal;
  return (
    <div className="App">
      {portal.map((portal) => (
        <Comp name={portal.name} age={portal.age} comment={portal.comment} />
      ))}
    </div>
  );
}
