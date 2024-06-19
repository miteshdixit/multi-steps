/* eslint-disable react/prop-types */

import FormField from "./FormField";


const Step2 = ({ formData, errors, handleChange }) => {
  return (
    <div>
      <FormField
        label="Address Line 1"
        name="address1"
        value={formData.address1}
        onChange={handleChange}
        error={errors.address1}
      />
      <FormField
        label="Address Line 2"
        name="address2"
        value={formData.address2}
        onChange={handleChange}
      />
      <FormField
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        error={errors.city}
      />
      <FormField
        label="State"
        name="state"
        value={formData.state}
        onChange={handleChange}
        error={errors.state}
      />
      <FormField
        label="Zip Code"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        error={errors.zip}
      />
    </div>
  );
};

export default Step2;
