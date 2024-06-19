/* eslint-disable react/prop-types */
import FormField from './FormField';

const Step1 = ({ formData, errors, handleChange }) => {
  return (
    <div className='d-flex align-content-center flex-column mb-3'>
      <FormField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <FormField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormField
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />
    </div>
  );
};

export default Step1;
