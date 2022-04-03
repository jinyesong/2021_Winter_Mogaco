import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    const {id} = useParams(); //url의 parameter를 가져오는듯, React-router가 변수의 값을 넘겨줌
    const getMovie = async () => { //await는 async함수안에서만 사용가능하기 때문에 따로 함수 생성해서 사용
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json.data.movie);
        setLoading(false);
        console.log(json.data.movie);
    }
    useEffect(()=>{
        getMovie();
    },[]);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : <div><h1>Detail</h1><Movie key={detail.id} id={detail.id} coverImg={detail.medium_cover_image} title={detail.title} summary={detail.summary} genres={detail.genres} /></div>}
        </div>
    );
}

export default Detail;