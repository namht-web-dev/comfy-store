const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className="w-full grid mx-auto">
      <fieldset className="fieldset">
        <legend className="fieldset-legend">{label}</legend>
        <input
          name={name}
          type={type}
          className="input min-w-80"
          placeholder={name}
          defaultValue={defaultValue}
        />
      </fieldset>
    </div>
  );
};
export default FormInput;
