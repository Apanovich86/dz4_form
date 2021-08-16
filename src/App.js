import './App.css';
import ControlledForm from "./components/controled-form/ControledForm";
import Cars from "./components/get.car/Cars";

function App() {
    return (

        <div>
            <ControlledForm/>
            <h3>Cars:</h3>
            <Cars/>
        </div>
    );
}

export default App;
