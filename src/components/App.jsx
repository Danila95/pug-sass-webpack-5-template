import "../styles/index.scss";
import Recipes from "./recipes";
import panel from "../images/photos-1.jpg";
import svgImg from "../images/9foG-.svg";

const App = () => {
  return (
    <>
      <section className="hero">
        <main>
          <section>
            <h1>Hello, React</h1>
          </section>
        </main>
        <img src={panel} alt="panel" width="250" />
        <img src={svgImg} alt="svgImg" />
        {/* <h1>Test</h1> */}
        <Recipes />
      </section>
    </>
  );
};

export default App;
