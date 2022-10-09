import logo1 from "./asset/images/logo.png";

function App() {
  return (
    <>
      <section className="nav_custom">
        <div className="logo">
          <img src={logo1} alt="logo image" />
        </div>
        <div className="mid_logo"></div>
        <div className="right_content"></div>
      </section>
    </>
  );
}

export default App;
