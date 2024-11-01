
type Props = {
    setSelectedCategory : React.Dispatch<React.SetStateAction<string | null>>; //update useState
}

const Filter = ({ setSelectedCategory } : Props) => {

    const categories = ["Art", "Science", "War", "Religion", "Sports", "Politics"];



  return (
    <div className='filter'>
        <div className="filter__select">
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="">All Genres</option>
                {categories.map((category) => (
                    <option key={category}>{category}</option>
                ))}
            </select>
        </div>

       
    </div>
  )
}

export default Filter