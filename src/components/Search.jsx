import React , {useContext, useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { BiFilter } from "react-icons/bi";
import { HiArrowLeft } from "react-icons/hi";
import { UserContext } from '../context/UserContext';

const Search = () => {

    const [ searchIcon , setSearchIcon ] = useState(false)
    let {setUsers , usersData} = useContext(UserContext)

    const searchUsers = (e) => {
      e.preventDefault();
      let user = e.target.value;
      setUsers(usersData.filter((v,i) => v.userName.toUpperCase().match(user.toUpperCase())));
    }

  return (
    <div className='sidebar-search'>
        <div className="search-input">
            {
                searchIcon ?
                <HiArrowLeft color='#54656f' /> 
                :
                <FaSearch color='#54656f' /> 
            }
            <input 
            type="text" 
            placeholder='Search or start new chat'
            onFocus={() => setSearchIcon(!false)}
            onBlur={() => setSearchIcon(false)}
            onChange={searchUsers}
            />
        </div>
        <button><BiFilter /></button>
    </div>
  )
}

export default Search