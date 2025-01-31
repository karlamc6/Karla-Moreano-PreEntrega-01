import logo from '../imagenes/cordova-importaciones.png'
import CartWidget from './CartWidget'

function NavBar () {
    return (
        <div className='barraSuperior'>
            <img src={logo} alt="" />
            <p style={{fontSize:'25px', color:'#FF2625', marginRight:'200px'}}>Esencial Store</p>
            <ul className='categoriasTienda' style={{fontSize:'17px'}}>
                <li>Abarrotes</li>
                <li>Frutas</li>
                <li>Carnes</li>
                <li>Menestras</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar