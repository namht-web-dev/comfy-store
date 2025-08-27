const FormCheckbox = ({ label, name, checked }) => {
  return (
    <div className="flex items-center gap-4">
      <legend className="fieldset-legend capitalize text-sm">{label}</legend>
      <label className="label">
        <input
          type="checkbox"
          name={name}
          defaultChecked={checked}
          className="checkbox checkbox-secondary"
        />
      </label>
    </div>
  );
};
export default FormCheckbox;
