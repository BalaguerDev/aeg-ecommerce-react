import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './header.css';

export default function Header(props) {
    const{countCartItems}=props;
    return (
        <div className="block">
            <div className="blackOffert text-center fixed-top">
                ENVIO <u>GRATUITO</u> POR COMPRAS MAYORES A 500€
            <nav className="navbar navbar-expand-lg py-1 ">
                <div className="container">
                    <a href="#/" className="imgLogo"><img src="assets/logo-AEG.png" alt="logo AEG" ></img></a>

                    <button className="btn btn-outline-light navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#/">Perforación y Demolición</a></li>
                                    <li><a className="dropdown-item" href="#/">Fijación</a></li>
                                    <li><a className="dropdown-item" href="#/">Herramientas para Madera</a></li>
                                    <li><a className="dropdown-item" href="#/">Herramientas para Metal</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">Gremio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">Tecnologia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">Servicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">Sobre AEG</a>
                            </li>

                        </ul>

                        <div>
                            <a href="#/" className="btn btn-outline-light rounded-circle ms-2"><ShoppingCartIcon/>
                                {countCartItems ? (
                                <Badge badgeContent={countCartItems} color="success">
                                </Badge> )  : (
                                    ""
                                )}
                                
                            </a>

                            <a href="#/signin">Sign In</a>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </div>
    )
}