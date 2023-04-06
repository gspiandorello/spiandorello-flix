import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';
import './style.css';

function Filme(){

    const {id} = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "1b9f42640c34fdb63dbdfab9b7f0ce60",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                navigate("/", { replace: true });
                return;
            })
        }

        loadFilme();

        return () => {

        }
    }, [navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@spiandorelloflix");
        
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some( (savedMovies) => savedMovies.id === filme.id);

        if(hasFilme){
            toast.warn("O filme selecionado já está na sua lista!");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@spiandorelloflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!");
    }

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando detalhes do filme...</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar filme</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Assista o trailer aqui
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;