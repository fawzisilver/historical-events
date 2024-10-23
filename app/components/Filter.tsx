import { useEffect, useState } from 'react'

type Props = {
    setSelectedCategory : React.Dispatch<React.SetStateAction<string | null>>; //update useState
}

const Filter = ({ setSelectedCategory } : Props) => {

    const [theme, setTheme] = useState("dark-theme");
    const categories = ["Art", "Science", "War", "Religion", "Sports"];


    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


    const changeTheme = () => {

        if (theme === "light-theme") {
            setTheme("dark-theme")
        } else {
            setTheme("light-theme");
        }
    }

  return (
    <div className='filter'>
        <div className="filter__select">
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="">Genres</option>
                {categories.map((category) => (
                    <option key={category}>{category}</option>
                ))}
            </select>
        </div>

        <div className="theme-toggler">
            <input 
                type="checkbox" 
                id="theme-toggler__checkbox" 
                className='theme-toggler-checkbox'

            />
            <label 
                onClick={changeTheme} 
                htmlFor="theme-toggler__checkbox" 
                className='theme-toggler__label'
                >
                Toggle
            </label>
        </div>
    </div>
  )
}

export default Filter