import {useParams} from "react-router-dom";
import { useEffect,useState } from "react";


function Detail() {
    const {id} = useParams();
    const [movie,setMovie] = useState();
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
          )
          .then((response)=> response.json())
          .then((json)=>{
            setMovie(json.data.movie);
            setLoading(false);
          });
    },[])
    return (
        <div>
            {loading? <h1>loading...</h1>:
            <div>
                <img src={movie.medium_cover_image}/>
                <h1>{movie.title}</h1>
            </div>}
        </div>
    )
}

export default Detail;