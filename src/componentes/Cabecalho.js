import logo from "../assets/sgp_logo_horizontal.png"
import "./cabecalho.css"

export default function Cabecalho(){
    return(
        
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid mr-3">
          <div className="nav">
          <img src={logo} className="imagem" />

          <div
            className="collapse navbar-collapse caixa"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Usuários
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projetos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tarefas
                </a>
              </li>
            </ul>
            <button className="btn btn-primary" type="submit">
              Sair
            </button>
            </div>
          </div>
        </div>
        </nav>
    )
}