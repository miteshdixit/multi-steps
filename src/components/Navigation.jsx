/* eslint-disable react/prop-types */

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Navigation = ({ currentStep, handleNext, handleBack, handleSubmit ,error}) => {
  return (
    <div className="navigation d-flex justify-content-center" style={{margin:"10px", padding:"12px"}}>
      {currentStep > 1 && (
        <div className=""> 
        <button type="button" className="btn btn-primary m-2" onClick={handleBack}><GrPrevious/> Back </button>
      
        </div>
      )}
      {currentStep < 3 ? (
        <button type="button" className={ !error ? "btn  m-2 btn-outline-danger" :`btn btn-primary m-2`} onClick={handleNext}>Next <GrNext/></button>
      ) : (
        <button type="button" className="btn btn-success  m-2" onClick={handleSubmit}>Success</button>
      )}
    </div>
  );
};

export default Navigation;
