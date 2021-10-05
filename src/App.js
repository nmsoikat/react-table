import "./App.css";
import BasicTable from "./components/BasicTable";
import FilteringTable from "./components/FilteringTable";
import Pagination from "./components/Pagination";
import RowSelection from "./components/RowSelection";
import SortingTable from "./components/SortingTable";

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <Pagination /> */}
      <RowSelection />
    </div>
  );
}

export default App;
