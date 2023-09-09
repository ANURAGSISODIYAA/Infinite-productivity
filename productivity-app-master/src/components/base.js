import Customnavbar from "./Customnavbar";

const Base = ({ title = "Welcome to our website", children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <Customnavbar />
      {children}
      
    </div>
  );
};

export default Base;
