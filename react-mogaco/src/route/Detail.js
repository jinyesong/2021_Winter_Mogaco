import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail(){
    const {id} = useParams(); //url의 parameter를 가져오는듯, React-router가 변수의 값을 넘겨줌
    const getMovie = async () => { //await는 async함수안에서만 사용가능하기 때문에 따로 함수 생성해서 사용
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    }
    useEffect(()=>{
        getMovie();
    },[]);
    return <h1>Detail</h1>
}

export default Detail;