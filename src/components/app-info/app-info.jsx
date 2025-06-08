import "./app-info.css";

const AppInfo = ({ totalEmployees, increaseCandidates }) => {


  return (
    <div className="app-info">
      <h1>Employees App</h1>
      <h2>Total number of employees: {totalEmployees}</h2>
      <h2>Number of employees for promotion: {increaseCandidates}</h2>
    </div>
  );
};

export default AppInfo;
