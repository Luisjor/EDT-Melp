import React from "react"

const Article = () => {   
    const [places, setPlaces] = React.useState([])
    React.useEffect(() => {
        loadPlaces()
    }, [])

    const loadPlaces = async() => {
        try{
            const response = await fetch('https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json');

            const datos = await response.json()
            setPlaces(datos)
        } catch(e) {
            console.log(e)
        }

    }

    console.log(places)
    const Places = places.map(place => {
        return(
            <article className="place_card" key={place.id}>
                <div className="imgBack"
                    style={{ 
                    backgroundImage: `url("https://s3.amazonaws.com/static.om.anigamy.net/static.selecciones.com.ar/App/Article/12-consejos-para-saber-que-pedir-en-un-restaurante-2636-mainImage-0.jpg")` 
                    }}>
                </div>
                <div className="place_data">
                    <h1>{place.name}</h1>
                    <span>{place.rating}</span>
                    <p>Location: {place.address.street} <br/>
                    {place.address.city}, {place.address.state}</p>
                    <p>Contact: {place.contact.phone}<br/>
                                {place.contact.site}<br/>
                                {place.contact.email}</p>
                </div>
            </article>
            
        )
    })

    return(
        <section className="places_section">
            {Places}
        </section>
        
    )
}

export default Article;