const Input = ({ name, value, label, onChange, placeholder, type }) => {
  return (
    <>
      <div className="form-group mb-2">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          className="form-control"
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
    </>
  );
};

export default Input;
