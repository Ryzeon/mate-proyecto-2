import './Header.css'
import '../../bases.css'

const Header = ({mensaje, setRand, setBtnInput}) => {
    const toggleRand = () => setRand(true);

    const toggleInput = () => setBtnInput(true);
    return(
        <header className='flex-row flex-column'>
            <div className='header__container'>

                <div className='header__content'>
                    <div>
                        <h1>Generador de matrices</h1>
                        <p>{mensaje}</p>
                    </div>

        

                </div>

                <div className='header__buttons flex-row'>
                    <div className='button button__random' onClick={toggleRand}>
                        Matriz random
                    </div>

                    <div className='button button_input' onClick={toggleInput}>
                        Ingresar matriz
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;