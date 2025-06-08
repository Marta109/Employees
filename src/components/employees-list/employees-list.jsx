import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  if (!data || data.length === 0) {
    return <p className="text-center">No employees found</p>;
  }

  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      // <EmployeesListItem key={item.id} name={item.name} salary={item.salary} />
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
