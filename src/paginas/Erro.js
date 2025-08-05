import logo from "../assets/sgp_logo_horizontal.png";
import robo from "../assets/robo_404.png"
import rodape from "../assets/treina_recife_miniatura.png"
import "./Erro.css";


export default function Erro() {
  return (
    <div>
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
        <div className="alerta">
            <div class="alert alert-warning mt-3" role="alert">
                Esta página não existe!
        </div>
      </div>
      <div className="robo">
        <img src={robo} />
      </div>
      <div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-body-secondary">
           Treina Recife &copy; 2025
          </p>

          <img src={rodape} className="mini"/>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Cursos
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Professores
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Institucional
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
    </div>
  );
}
