import React from "react"
import "./App.css";
import BasicButtonGroup from "./components/Button/Button.js"
import BasicPagination from "./components/Button/pagination/Pagination.js"
import BasicSpeedDial from "./components/speedDial/SpeedDials.js"
import HorizontalLinearStepper from "./components/stepper/Stepper.js";
import BasicGrid from "./components/basicGrids/BasicGrids.js";
import StandardImageList from "./components/imageList/ImageList.js";
import LeadingClickAway from "./components/clickAwayListener/ClickAwayListeners.js";
import SimpleCollapse from "./components/collapse/Collapse.js";
const App = () => {
  return (
    <>

      <div>
        <div className="Button">
          <h1>Button</h1>
          <BasicButtonGroup />

        </div>
        <div className="Pagination">
          <h1>Pagination</h1>
          <BasicPagination />
        </div>

        <div className="BasicSpeedDial">
          <h1>BasicSpeedDial</h1>
          <BasicSpeedDial />
        </div>

        <div className="HorizontalLinearStepper">
          <h1>HorizontalLinearStepper</h1>
          <HorizontalLinearStepper />
        </div>

        <div className="BasicGrid">
          <h1>BasicGrid</h1>
          <BasicGrid />
        </div>

        <div className="StandardImageList">
          <h1>StandardImageList</h1>
          <StandardImageList />
        </div>

        <div className="LeadingClickAway">
          <h1>LeadingClickAway</h1>
          <LeadingClickAway />
        </div>

        <div className="SimpleCollapse">
          <h1>SimpleCollapse</h1>
          <SimpleCollapse />
        </div>
      </div>
    </>
  )
}
export default App