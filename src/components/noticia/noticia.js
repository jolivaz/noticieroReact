import React from 'react'

const Noticia = ({newNoticia}) => {
    const {urlToImage, url, source, description, title } = newNoticia;

    const imagen = urlToImage ? 
        urlToImage : 'http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png'

    
    return(
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={imagen} alt={title} />
                </div>
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <a 
                    href={url} target="_blank" 
                    rel="noopener noreferrer"
                    className="waves-effect waves-light btn">
                        Ver noticia
                </a>
            </div>
        </div>
    )

}

export default Noticia;