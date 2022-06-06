import ListingsCard from "./ListingsCard"
import { sorter } from "../../utils/listingsPageData"

const ListingsArea = () => {
  return (
    <>
      <section className='-z-10 flex flex-col'>
        <div className='mb-5 ml-auto'>
          <select name='' id=''>
            {sorter.map((item) => {
              return <option value={item.value}>{item.name}</option>
            })}
          </select>
        </div>
        <div className='grid grid-cols-1 gap-5'>
          <ListingsCard />
          <ListingsCard />
          <ListingsCard />
          <ListingsCard />
        </div>
      </section>
    </>
  )
}

export default ListingsArea
