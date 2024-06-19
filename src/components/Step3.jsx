/* eslint-disable react/prop-types */

const Step3 = ({ formData }) => {
  return (
    <div className="d-flex justify-content-center align-items-center mb-3">
      <div className="card p-4 shadow" style={{ maxWidth: "600px" , width:"20rem" }}>
        <h2 className="card-title text-center mb-4">Confirmation</h2>
        <div className="card-text">
          <div className="mb-2">
            <strong>Name:</strong> {formData.name}
          </div>
          <div className="mb-2">
            <strong>Email:</strong> {formData.email}
          </div>
          <div className="mb-2">
            <strong>Phone:</strong> {formData.phone}
          </div>
          <div className="mb-2">
            <strong>Address Line 1:</strong> {formData.address1}
          </div>
          <div className="mb-2">
            <strong>Address Line 2:</strong> {formData.address2}
          </div>
          <div className="mb-2">
            <strong>City:</strong> {formData.city}
          </div>
          <div className="mb-2">
            <strong>State:</strong> {formData.state}
          </div>
          <div className="mb-3">
            <strong>Zip Code:</strong> {formData.zip}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
