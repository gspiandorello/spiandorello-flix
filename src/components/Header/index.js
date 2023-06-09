import './style.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className="logo" to="/">Spiandorello Flix</Link>
            <Link className="favoritos" to="/meus-filmes">Meus Filmes</Link>
        </header>
    )
}

export default Header;