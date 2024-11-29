import './SideBar.css'
import { CollectionsDropDown } from './CollectionsDropDown'
import { SortDropDown } from './SortDropDown'

type SideBarProps = {
  collections: [] | any
  onCollectionChange: (collectionId: number | string) => void
}

export const SideBar = ({collections, onCollectionChange} : SideBarProps) => {
  return (
    <div className="sideBar">
      <h3>Menu</h3>
      <h3>Show</h3>
      <CollectionsDropDown
        CollectionsFetch={collections}
        onChange={onCollectionChange}
      />
      <h3>Sort</h3>
      <SortDropDown />
    </div>
  )
}
