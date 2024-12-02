type Collection = {
  collectionid: number
  name: string
  description: string
}

type CollectionsDropDownProps = {
  CollectionsFetch: Collection[]
  onChange: (collectionId: number | string) => void
}

export const CollectionsDropDown = ({CollectionsFetch, onChange}: CollectionsDropDownProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = String(event.target.value)
    if (selectedId == "all"){
      onChange(selectedId)
    } else{
      onChange(Number(selectedId))
    }
    console.log(`on drop down --> ${selectedId}`)
  };
  return (
    <div>
      <select onChange={handleChange}>
        <option key="all" value="all">
          All
        </option>
        {CollectionsFetch.map((collection) => (
          <option key={collection.collectionid} value={collection.collectionid}>
            {collection.name}
          </option>
        ))}
      </select>
    </div>
  )
}
