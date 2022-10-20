import Exclusive from "./component/Exclusive";
import Footer from "./component/Footer";
import Formed from "./component/Formed";
import Header from "./component/Header";
import Mega from "./component/Mega";
import Plus from "./component/Plus";

function App() {
  return (
    <div>
      <Header />
      <div style={{ height: "100px" }}></div>
      <Exclusive />
      <div style={{ height: "100px" }}></div>
      <Mega />
      <div style={{ height: "100px" }}></div>
      <Plus />
      <div style={{ height: "100px" }}></div>
      <Formed />
      <div style={{ height: "100px" }}></div>
      <Footer />
    </div>
  );
}

export default App;
