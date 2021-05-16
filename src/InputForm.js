import './App.css';

function InputForm({
  placeholder, value, handleSubmit = () => { }, handleChange = () => { }
}) {

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit}
    >
      <input
        className="name-input p-10-20"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </form>
  )
}

export default InputForm;
