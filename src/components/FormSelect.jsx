const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <div>
      <h4 className="py-2 capitalize">{label}</h4>
      <select
        name={name}
        defaultValue={defaultValue}
        className={`select ${size}`}
      >
        {list.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;
