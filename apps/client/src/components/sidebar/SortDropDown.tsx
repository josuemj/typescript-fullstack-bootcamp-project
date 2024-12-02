type SortDropDownProps = {
  onSortChange: (sortOrder: string) => void; // Callback for sort order
};

export const SortDropDown = ({ onSortChange }: SortDropDownProps) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value); // Notify parent of selected sort order
  };

  return (
    <div>
      <select onChange={handleSortChange}>
        <option value="default">Default</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};
