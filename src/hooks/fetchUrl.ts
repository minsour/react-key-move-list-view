import { useState, useEffect } from "react";

export const useFetch = (proxyUrl:string, targetUrl:string) => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);
    const demo = {
        datas: datas,
        loading: loading
    }
    const fetchUrl = async () => {
        const response = await fetch(proxyUrl+targetUrl);
        const json = await response.json();
        const movies = await json.data.movies;
        setDatas(movies.map((data:any,index:number) => {
            return({
                _id:data.id,
                index:index,
                image:data.large_cover_image,
                title:data.title_english,
                description:data.genres[0],
            })
        }));
        setLoading(false);
    }
    useEffect(()=>{
        fetchUrl();
    },[]);
    return demo;
}