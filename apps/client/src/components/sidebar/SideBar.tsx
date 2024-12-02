import './SideBar.css';
import { CollectionsDropDown } from './CollectionsDropDown';
import { SortDropDown } from './SortDropDown';

type SideBarProps = {
  collections: [] | any;
  onCollectionChange: (collectionId: number | string) => void;
  onSortChange: (sortOrder: string) => void;
};

export const SideBar = ({
  collections,
  onCollectionChange,
  onSortChange,
}: SideBarProps) => {
  return (
    <div className="sideBar">
      <h3>Menu</h3>
      <div>
        <h3>Show</h3>
        <CollectionsDropDown
          CollectionsFetch={collections}
          onChange={onCollectionChange}
        />
      </div>
      <div>
        <h3>Sort</h3>
        <SortDropDown onSortChange={onSortChange} />
      </div>
    </div>
  );
};
