import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './header.css';
import Basket from "../basket/Basket";


export default function Header(props) {
    const { cartItems, onAdd, onRemove, onDelete } = props;

    const { countCartItems } = props;

    return (


<!--Main Navigation-->
<header>
  <!-- Jumbotron -->
  <div class="p-3 text-center bg-white border-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
          <a href="#!" class="ms-md-2">
            <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" />
          </a>
        </div>

        <div class="col-md-4">
          <form class="d-flex input-group w-auto my-auto mb-3 mb-md-0">
            <input autocomplete="off" type="search" class="form-control rounded" placeholder="Search" />
            <span class="input-group-text border-0 d-none d-lg-flex"><i class="fas fa-search"></i></span>
          </form>
        </div>

        <div class="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
          <div class="d-flex">
            <!-- Cart -->
            <a class="text-reset me-3" href="#">
              <span><i class="fas fa-shopping-cart"></i></span>
              <span class="badge rounded-pill badge-notification bg-danger">1</span>
            </a>

            <!-- Notification -->
            <div class="dropdown">
              <a class="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
                role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-bell"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Some news</a></li>
                <li><a class="dropdown-item" href="#">Another news</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>


           {/*  usuario */}
            <div class="dropdown">
              <a class="text-reset dropdown-toggle d-flex align-items-center hidden-arrow" href="#"
                id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" class="rounded-circle" height="22"
                  alt="" loading="lazy" />
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Perfil</a></li>
                <li><a class="dropdown-item" href="#">Favoritos</a></li>
                <li><a class="dropdown-item" href="#">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Jumbotron -->

  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <!-- Container wrapper -->
    <div class="container justify-content-center justify-content-md-between">
      {/* DROPDOWN */}
      <ul class="navbar-nav flex-row">
        <li class="nav-item me-2 me-lg-0">
          <a class="nav-link" href="#" role="button" data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1"
            class="btn shadow-0 p-0 me-3" aria-controls="#sidenav-1" aria-haspopup="true">
            <i class="fas fa-bars me-1"></i>
            <span>Productos</span>
          </a>
        </li>
        <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
          <a class="nav-link" href="#">Perforación y Demolición</a>
        </li>
        <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
          <a class="nav-link" href="#">Herramientas de Impacto</a>
        </li>
        <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
          <a class="nav-link" href="#">Herraientas para Madera</a>
        </li>
        <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
          <a class="nav-link" href="#">Herraientas para Metal</a>
        </li>
      </ul>
      {/* DROPDOWN */}

    { /* DESCARGA FOLLETO */}
      <button class="btn btn-outline-primary" data-mdb-ripple-color="dark" type="button">
        DESCARGAR FOLLETO<i class="fas fa-download ms-2"></i>
      </button>
    </div>
   {/* DESCARGA FOLLETO */}
  </nav>

  {/* Side Navbar */}
  <div id="sidenav-1" class="sidenav" role="navigation" data-mdb-hidden="true" data-mdb-accordion="true">
    <ul class="sidenav-menu">
      <li class="sidenav-item">
        <a class="sidenav-link"><i class="fas fa-layer-group pe-3"></i><span>Categories</span></a>
        <ul class="sidenav-collapse show">
          <li class="sidenav-item">
            <a class="sidenav-link">Dresses</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Shirts</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Jeans</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Shoes</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Accessories</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Jewelry</a>
          </li>
        </ul>
      </li>
      <li class="sidenav-item">
        <a class="sidenav-link"><i class="fas fa-gem pe-3"></i><span>Brands</span></a>
        <ul class="sidenav-collapse">
          <li class="sidenav-item">
            <a class="sidenav-link">Brand 1</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Brand 2</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Brand 3</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Brand 4</a>
          </li>
        </ul>
      </li>
      <li class="sidenav-item">
        <a class="sidenav-link"><i class="fas fa-gift pe-3"></i><span>Discounts</span></a>
        <ul class="sidenav-collapse">
          <li class="sidenav-item">
            <a class="sidenav-link">-70%</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">-50%</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Any</a>
          </li>
        </ul>
      </li>
      <li class="sidenav-item">
        <a class="sidenav-link"><i class="fas fa-fire-alt pe-3"></i><span>Popular</span></a>
        <ul class="sidenav-collapse">
          <li class="sidenav-item">
            <a class="sidenav-link">Jewelry</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Snickers</a>
          </li>
        </ul>
      </li>
      <li class="sidenav-item">
        <a class="sidenav-link"><i class="fab fa-hotjar pe-3"></i><span>Top Ventas</span></a>
        <div class="card mx-3">
          <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).jpg"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-danger ms-2">-20%</span></h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <p class="mb-2">Pink snickers</p>
            </a>
            <p class="mb-0">
              <s>$61.99</s><strong class="ms-2 text-danger">$50.99</strong>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  {/* Side Navbar */}


</header>


    )
}