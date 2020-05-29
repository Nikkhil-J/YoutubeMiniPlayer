import React, {useState} from 'react'
 
const Search = (props) => {

    const handleSubmit =e => {
        e.preventDefault();
        props.onTermSubmit(term)
        setTerm('')
    }

    const [term, setTerm] = useState('')
    return (
        <div className="blue" onSubmit={handleSubmit} style={{backgroundColor:"rgb(7, 16, 49)"}} className="search-bar ui segment">
            <form className="ui form">
                <div className="field" style={{color:"#fff"}}>
                    <label>Video Search</label>
                    <input 
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

export default Search
