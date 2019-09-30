import React from 'react'
import Noticia from '../noticia/noticia';

const ListaNoticias = ({noticias}) => (
        <div className="row">
            {
                noticias.length > 0 &&
                noticias.map(newNoticia => (
                    <Noticia 
                        key={newNoticia.url}
                        newNoticia={newNoticia} />
                ))
            }
        </div>
)

export default ListaNoticias;    