import React, {useState} from 'react'


function Story(props) {
    const [data, setData] = useState(props.data)
    // setData(props)

    const viewResults = (data) =>{
        let html = []
        for (const d of data) {

            html.push(<div className='col' style={{padding: '20px 20px'}}>
                <h4 className='title text-center'>{d.Title}</h4>
                <img className="rounded" id={d.imdbID} src={d.Poster}/>
                <h6 className='type text-center'>{d.Type}</h6>
                <h6 className='year text-center'>{d.Year}</h6>
            </div>)
            
        }
        return html
    }

    return (
        <div className="row align-items-start">
           {viewResults(data)}
        </div>
    )
}

export default Story
