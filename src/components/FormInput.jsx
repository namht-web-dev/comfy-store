const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  size = "input-md min-w-80",
}) => {
  return (
    <div className="w-full grid mx-auto">
      <fieldset>
        <h4 className="py-2 capitalize">{label}</h4>
        <input
          name={name}
          type={type}
          className={`input ${size}`}
          placeholder={name}
          defaultValue={defaultValue}
        />
      </fieldset>
    </div>
  );
};
export default FormInput;
