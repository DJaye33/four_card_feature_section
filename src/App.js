import Header from "./Header";
import Card from "./Card";

import supervisorIcon from "./images/icon-supervisor.svg";
import teamBuilderIcon from "./images/icon-team-builder.svg";
import karmaIcon from "./images/icon-karma.svg";
import calculatorIcon from "./images/icon-calculator.svg";

import "./App.css";
import "./Card.css";
import "./Header.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main class="Main">
        <div id="Main-1">
          <Card
            borderColor="#44D3D2"
            title="Supervisor"
            text="Monitors activity to identify project roadblocks"
            icon={supervisorIcon}
          />
        </div>
        <div id="Main-2">
          <Card
            borderColor="#EA5454"
            title="Team Builder"
            text="Scans our talent network to create the optimal team for your project"
            icon={teamBuilderIcon}
          />
          <Card
            borderColor="#FCAE4A"
            title="Karma"
            text="Regularly evaluates our talent to ensure quality"
            icon={karmaIcon}
          />
        </div>
        <div id="Main-3">
          <Card
            borderColor="#44D3D2"
            title="Calculator"
            text="Uses data from past projects to provide better delivery estimates"
            icon={calculatorIcon}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
