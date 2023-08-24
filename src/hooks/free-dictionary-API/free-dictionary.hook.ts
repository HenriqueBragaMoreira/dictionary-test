import Axios from "axios";

const httpClient = Axios.create({baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en'})

export type ApiResponse = {
	word: string;
	phonetic: string;
	phonetics: Phonetic[];
	meanings: Meaning[];
	license: License;
	sourceUrls: string[];
}[];

export type Phonetic = {
	text: string;
	audio: string;
	sourceUrl: string;
};

export type Meaning = {
	partOfSpeech: string;
	definitions: Definition[];
	synonyms: string[];
	antonyms: string[];
};

export type Definition = {
	definition: string;
	synonyms: string[];
	antonyms: string[];
	example?: string;
};

export type License = {
	name: string;
	url: string;
};


export default function useDictionaryAPI() {


    async function word(word:string) {
        try {
           const result = await httpClient.get<ApiResponse>(`/${word}`)
           return result.data
        } catch (error) {
            console.error(error)
        }
    }
        

    return {
        word
    }
}