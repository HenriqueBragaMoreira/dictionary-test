import Axios from "axios";

const httpClient = Axios.create({baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en'})


export default function useDictionaryAPI() {


    async function word(word:string) {
        try {
           const result = await httpClient.get(`/${word}`)
           return result.data
        } catch (error) {
            console.error(error)
        }
    }
        

    return {
        word
    }
}