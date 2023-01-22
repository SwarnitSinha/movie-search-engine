import axios from "axios";
axios.defaults.baseURL='https://api.themoviedb.org/3'


export async function getApi(url){
    try {
        const response = await axios({
            url:'/trending/all/day',
            method:'get',
            params:{
                api_key:'87c1567efe975eaf7428f0072cd7cede'
            }
        })
        
       
        if(response.data && response.data.results){
           
            return response.data.results
        }
    } catch (error) {
        console.log(error.message)
        return []
    }
}

export async function fetchTrendingMovies(url) {
    try {
        const response = await axios({
            url:'/trending/all/day',
            method:'get',
            params:{
                api_key:'87c1567efe975eaf7428f0072cd7cede'
            }
        })
        
        console.log(response.data)
        if(response.data && response.data.results){
            return response.data.results
        }
    } catch (error) {
        console.log(error.message)
        return []
    }
}

export async function fetchMovieById(id) {
    try {
        const response = await axios({
            url:`/movie/${id}`,
            method:'get',
            params:{
                api_key:'87c1567efe975eaf7428f0072cd7cede'
            }
        })
        
        console.log(response.data)
        if(response.data && response.data){
            return response.data
        }
    } catch (error) {
        console.log(error.message)
        return []
    }
}

export async function fetchMovieByName(name) {
    try {
        console.log(name)
        const response = await axios({
            url:`/search/movie`,
            method:'get',
            params:{
                api_key:'87c1567efe975eaf7428f0072cd7cede',
                query:name,
                // include_adult:'true'
            }
        })
        if(response && response.data){
            console.log("response getting",response)
            return response.data
        }
    } catch (error) {
        console.log(error.message)
        return []
    }
}
