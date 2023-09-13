import Button from '../Button/Button'
import './Header.css'
import '../../bases.css'

/**
 *
 * @param mssgHeader
 * @param btnSelected
 * @param setSelected
 * @param active
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({mssgHeader, btnSelected, setSelected, active}) => { // El componente Header recibe un mensaje, el botón seleccionado, la función para seleccionar el botón y el estado activo

    return (
        <header className='flex-row flex-column' id={active}>
            <div className='header__container'>

                <div className='header__content'>
                    <div>
                        <h1>Generador de matrices simétricas</h1>
                        <p>{mssgHeader}</p>
                    </div>
                </div>


                {
                    (btnSelected === '') ? (
                        <div className='header__buttons flex-row'>
                            <Button mssg='Matriz random' setSelected={setSelected} style={{}}></Button>
                            <Button mssg='Ingresar matriz' setSelected={setSelected} style={{}}></Button>
                        </div>
                    ) : <></>
                }


            </div>
        </header>
    )
}

export default Header;