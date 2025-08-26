import { useState } from "react";

const messages = [
  "Learn React",
  "Apply for jobs 👜",
  "Invest your new incomes 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((cur) => cur - 1);
  }

  function handleNext() {
    if (step < messages.length) {
      setStep((cur) => cur + 1);
    }
  }

  return (
    <>
      <p className="close-btn" onClick={() => setIsOpen((cur) => !cur)}>
        ✖️
      </p>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* <p className="message">
            Step {step} : {messages[step - 1]}
          </p> */}
  
  <StepMessage step={step} >  {messages[step - 1]}     </StepMessage>
 
         
         
         
         
         
          <div className="buttons">
            {/* <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handlePrevious}
          >
            Previous
          </button> */}

            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious} >
              <span>👈</span> Previous 
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>

            {/* <button
            //   onClick={() => alert("next")}
            onClick={handleNext}
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
          >
            Next
          </button> */}
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick,  children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
 
      {children}
    </button>
  );
}


function StepMessage ({step , children }){
  return (
           <p className="message">
            Step {step} : {children}
          </p>
  )
}
