import { useState, useEffect } from 'react';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Navigation from './components/Navigation';
// import { loadData, saveData } from '';
import {loadData , saveData} from './utils/LocalStorage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

function App() {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const savedData = loadData();
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleNext = () => {
    if (validateForm()) {
      setCurrentStep(currentStep + 1);
      saveData(formData);
    } else {
      toast.error("Please fix the errors before proceeding.");
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      toast.success("Form submitted successfully!");
      setFormData(initialFormData);
      setCurrentStep(1);
      saveData({});
    } else {
      toast.error("Please fix the errors before submitting." )
      ;
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};
  
    if (currentStep === 1) {
      if (!formData.name || typeof formData.name !== 'string' || formData.name.trim() === '') {
        newErrors.name = 'Name is required and must be a valid string';
        valid = false;
      }
      if (!formData.email || typeof formData.email !== 'string' || !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is required and must be valid';
        valid = false;
      }
      if (!formData.phone || typeof formData.phone !== 'string' || formData.phone.trim() === '') {
        newErrors.phone = 'Phone is required and must be a valid string';
        valid = false;
      }
    } else if (currentStep === 2) {
      if (!formData.address1 || typeof formData.address1 !== 'string' || formData.address1.trim() === '') {
        newErrors.address1 = 'Address Line 1 is required and must be a valid string';
        valid = false;
      }
      if (!formData.city || typeof formData.city !== 'string' || formData.city.trim() === '') {
        newErrors.city = 'City is required and must be a valid string';
        valid = false;
      }
      if (!formData.state || typeof formData.state !== 'string' || formData.state.trim() === '') {
        newErrors.state = 'State is required and must be a valid string';
        valid = false;
      }
      if (!formData.zip || typeof formData.zip !== 'string' || formData.zip.trim() === '') {
        newErrors.zip = 'Zip Code is required and must be a valid string';
        valid = false;
      }
    }
  
    setErrors(newErrors);
    return valid;
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div >
     <Header/>
     <div className="m-5">
      {currentStep === 1 && (
        <Step1
          formData={formData}
          errors={errors}
          handleChange={handleChange}
        />
      )}
      {currentStep === 2 && (
        <Step2
          formData={formData}
          errors={errors}
          handleChange={handleChange}
        />
      )}
      {currentStep === 3 && (
        <Step3 formData={formData} handleSubmit={handleSubmit} />
      )}
      <Navigation
        currentStep={currentStep}
        handleNext={handleNext}
        handleBack={handleBack}
        handleSubmit={handleSubmit}
        error= {errors}
      />
      <ToastContainer />
      </div>
    </div>
  );
}

export default App;
// const showToastMessage = () => {
//   toast.success("Success Notification !", {
//     position: toast.POSITION.TOP_RIGHT,
//   });
// };