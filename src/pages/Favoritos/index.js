import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.css';

function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@spiandorelloflix");
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);

        localStorage.setItem("@spiandorelloflix", JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso!");
    }

    return(
        <div className="meus-filmes">
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>
                Você não possui nenhum filme salvo ainda :( </span>}

            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes do filme</Link>
                                <button onClick={()=> excluirFilme(item.id) }>Excluir da lista</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;