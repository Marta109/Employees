import { useState } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

const App = () => {
  const [data, setData] = useState({
    employeesList: [
      { name: "John Smith", salary: 800, id: 1, increase: false, rise: true },
      { name: "Doe Kan", salary: 1200, id: 2, increase: true, rise: false },
      { name: "Jae Smith", salary: 1500, id: 3, increase: false, rise: false },
      { name: "Janet Doe", salary: 2500, id: 4, increase: true, rise: false },
    ],
    searchTerm: "",
    filter: "all",
    currentId: 5,
  });

  const onDelete = (id) => {
    setData({
      ...data,
      employeesList: data.employeesList.filter((el) => el.id !== id),
    });
  };

  const addNewEmployee = (name, salary) => {
    name = name.trim();
    salary = +salary;
    if (name === "" || salary === "" || isNaN(salary)) {
      console.error("Invalid input for name or salary");
      return;
    }

    const newEmployee = {
      name,
      salary,
      id: data.currentId,
      increase: false,
      rise: false,
    };
    setData({
      ...data,
      employeesList: [...data.employeesList, newEmployee],
      currentId: data.currentId + 1,
    });
  };

  const onToggleProp = (id, prop) => {
    setData({
      ...data,
      employeesList: data.employeesList.map((el) => {
        if (el.id === id) {
          return { ...el, [prop]: !el[prop] };
        }
        return el;
      }),
    });
  };

  const onSearchUpdate = (searchTerm) => {
    setData({
      ...data,
      searchTerm,
    });
  };

  const onSearch = (items, search) => {
    if (search.length === 0) return items;

    return items.filter((el) =>
      el.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const onFilterUpdate = (filter) => {
    setData({
      ...data,
      filter,
    });
  };

  const onFilter = (items, filter) => {
    if (filter === "promotion") {
      return items.filter((el) => el.rise);
    }

    if (filter === "salary") {
      return items.filter((el) => el.salary > 1000);
    }

    return items;
  };

  const totalEmployees = data.employeesList.length;
  const increaseCandidates = data.employeesList.filter(
    (el) => el.increase
  ).length;

  let visibleData = onFilter(
    onSearch(data.employeesList, data.searchTerm),
    data.filter
  );

  return (
    <div className="app">
      <AppInfo
        totalEmployees={totalEmployees}
        increaseCandidates={increaseCandidates}
      />
      <div className="search-panel">
        <SearchPanel onSearch={onSearchUpdate} />
        <AppFilter onFilter={onFilterUpdate} filter={data.filter} />
      </div>

      <EmployeesList
        data={visibleData}
        onDelete={onDelete}
        onToggleProp={onToggleProp}
      />
      <EmployeesAddForm addNewEmployee={addNewEmployee} />
    </div>
  );
};

export default App;
