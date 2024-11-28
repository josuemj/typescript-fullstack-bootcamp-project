import './SideBar.css'
import { CollectionsDropDown } from './CollectionsDropDown'
import { SortDropDown } from './SortDropDown'
export const SideBar = () => {
  return (
    <div className="sideBar">
      <h3>Menu</h3>
      <h3>Show</h3>
      <CollectionsDropDown />
      <h3>Sort</h3>
      <SortDropDown />
    </div>
  )
}
