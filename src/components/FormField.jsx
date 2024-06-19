/* eslint-disable react/prop-types */

const FormField = ({ label, name, value, onChange, error }) => {
  return (
    <form
      className="row d-flex justify-content-center needs-validationn"
      noValidate
    >
      <div className="col-md-4 m-2 w-50 h-10">
      <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          type="text"
          className={`form-control`}
          id={name}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={label}
          required
        />
        {error && <div className="is-invalid text-danger">{error}</div>}
        <div className="valid-feedback">Looks good!</div>
      </div>
    </form>
  );
};

export default FormField;
