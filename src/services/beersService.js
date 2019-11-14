import axios from 'axios'

const url = "https://api.irail.be/stations/?format=json"
// const key = ""

export default{
    getBreweries (){
        return axios.get(url)
    },
    getTrain(value){
        return axios.get("https://api.irail.be/liveboard/?id=[" + value + "]&format=json")
    }
}