import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import trashIcon from "../../assets/trash-icon.svg";
import eyeIcon from "../../assets/eye-icon.svg";
import "./style.css";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  const accept = (id) => {
    excluirFilme(id);
  };

  const reject = () => {};

  const confirm = (event, id) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Você tem certeza que gostaria de excluir o filme da sua lista?",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept: () => accept(id),
      reject,
    });
  };

  useEffect(() => {
    const minhaLista = localStorage.getItem("@spiandorelloflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });

    setFilmes(filtroFilmes);

    localStorage.setItem("@spiandorelloflix", JSON.stringify(filtroFilmes));
    toast.success("Filme removido com sucesso!");
  }

  return (
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>

      {filmes.length === 0 && (
        <span>Você não possui nenhum filme salvo ainda :( </span>
      )}

      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div className="div-icons">
                <button className="icons">
                  <Link to={`/filme/${item.id}`} title="Ver detalhes do filme">
                    <img src={eyeIcon} alt="Eye Icon" className="eye-icon" />
                  </Link>
                </button>
                <button className="icons">
                  <img
                    src={trashIcon}
                    alt="Delete Icon"
                    className="delete-icon"
                    onClick={(event) => confirm(event, item.id)}
                    title="Excluir filme da sua lista"
                  />
                </button>
              </div>
            </li>
          );
        })}
        <ConfirmPopup />
      </ul>
    </div>
  );
}

export default Favoritos;
