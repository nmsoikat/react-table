import "./App.css";
import BasicTable from "./components/BasicTable";
import FilteringTable from "./components/FilteringTable";
import Pagination from "./components/Pagination";
import SortingTable from "./components/SortingTable";

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      <Pagination />
    </div>
  );
}

export default App;
