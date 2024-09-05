import { useState } from "react"


function App() {


  const [height, setheight] = useState("");

  const [weight, setweight] = useState("");
  const [BMI, setBMI] = useState();
  const [stage, setstage] = useState("");
  const [error, seterror] = useState("");
  

  const calculateBMI = () => {
    
   seterror("");
    const Theight = /^\d+$/.test(height);
    const Tweight = /^\d+$/.test(weight);

   
    if (Theight && Tweight) {
      const heightinMeters = height / 100;
      const BMI = weight / (heightinMeters * heightinMeters);
      setBMI(BMI.toFixed(2));


      {
        BMI < 18.5 ? setstage("Underweight")
          : BMI >= 18.5 && BMI <= 25 ? setstage("Normal")
            : BMI > 25 && BMI <= 30 ? setstage("Overweight")
              : setstage("Obese")

      }

    }
    else {
      seterror("!Please enter valid height and weight");
      setBMI("");
      setstage("");
      setheight("");
      setweight("");
      


    }


  }
 
  const handleclear = () => {

   
    setheight("");
    setweight("");
    seterror("");
    const result=document.querySelector(".result");
    result.style.display="none";
    
  }

  return (
    <>
      <div className="container">

        <div className="BMIcalculator">
          <div className="error">
            {error}
          </div>

          <input className="height" value={height} onChange={(e) => setheight(e.target.value)} placeholder="Enter Height"></input>
          <input className="weight" value={weight} onChange={(e) => setweight(e.target.value)} placeholder="Enter Weight"></input>

          <div className="btndiv">
            <button className="calculate" onClick={calculateBMI}>Calculate</button>
            <button className="clear" onClick={handleclear}>Clear</button>


          </div>
          {BMI &&

           <div className="result">
              <p>BMI is {BMI}</p>
              <p>You are {stage}</p>
            </div>
           
          }


        </div>
      </div>
    </>
  )
}

export default App
