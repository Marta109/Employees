import { useState } from "react";
import "./employees-add-form.css";

const EmployeesAddForm = ({ addNewEmployee }) => {
  const [value, setValue] = useState({
    name: "",
    salary: "",
  });

  const onChangeValue = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setValue({ ...value, name: e.target.value });
    }
    if (e.target.name === "salary") {
      setValue({ ...value, salary: e.target.value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.name == "" || value.salary == "") return;
    addNewEmployee(value.name, value.salary);
    setValue({ name: "", salary: "" });
  };

  return (
    (
      <div className="app-add-form">
        <h3>Add a New Employee</h3>
        <form className="add-form d-flex" onSubmit={onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What's his name?"
            value={value.name}
            name="name"
            onChange={onChangeValue}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in $?"
            value={value.salary}
            name="salary"
            onChange={onChangeValue}
          />

          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    )
  );
};

export default EmployeesAddForm;
