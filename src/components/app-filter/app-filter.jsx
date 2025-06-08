import "./app-filter.css";

const AppFilter = ({ onFilter, filter }) => {
  const btnDate = [
    { name: "all", label: "All Employees" },
    { name: "promotion", label: "For Promotion" },
    { name: "salary", label: "Salary > 1000$" },
  ];

  const btnElements = btnDate.map(({ name, label }) => {
    const clazzName =
      name === filter ? "btn btn-outline-light" : "btn btn-light";
    return (
      <button
        key={name}
        className={clazzName}
        type="button"
        onClick={() => onFilter(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{btnElements}</div>;
};

export default AppFilter;
