import Styles from './Client.module.css'

interface ClientProps{ //en "interface" lista las propiedades y métodos, las propiedades no pueden tener valores y los métodos no pueden tener codigo
    name: string; 
}
const Client = ({ name }: ClientProps) => { //Se esta destructurando el objeto y ocupando esa propiedad y se le esta diciendo que tipo es.
    return (
        <div className={Styles.title}>
            Hola {name} {/* se retorna "name" que es del tipo string indicado en la validación */}
        </div> 
    )
}

export default Client;