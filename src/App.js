import "./App.css";
import BasicTable from "./components/BasicTable";
import ColumnHiding from "./components/ColumnHiding";
import ColumnOrder from "./components/ColumnOrder";
import FilteringTable from "./components/FilteringTable";
import Pagination from "./components/Pagination";
import RowSelection from "./components/RowSelection";
import SortingTable from "./components/SortingTable";
import StickyTable from "./components/StickyTable";

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <Pagination /> */}
      {/* <RowSelection /> */}
      {/* <ColumnOrder /> */}
      {/* <ColumnHiding /> */}
      <StickyTable />
    </div>
  );
}

export default App;
