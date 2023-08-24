import useDictionaryAPI from '@/hooks/free-dictionary-API/free-dictionary.hook'
import { Axios } from "axios";
import { createContext, useState } from "react";
import { BiSearch } from "react-icons/bi";

interface meanings {
  partOfSpeech: string
  definitions: { definition: string, example: string, synonyms: string[], antonyms: string[] }[]
}
interface contextProps {
  word: string
  meanings: meanings[]
}

export const InputContext = createContext( {} as contextProps );



export default function Main() {

  const [inputValue, setInputValue] = useState("")
  const DictionaryAPI = useDictionaryAPI()

  function handleValue(e: any) {
    setInputValue(e.target.value)
  }

  async function handleClick() {
    const data = await DictionaryAPI.word(inputValue)

    console.log(data)
  }



  const value = {
    inputValue, setInputValue
  }

  return (
    //<InputContext value={{}}>
    <main className=" w-screen flex flex-row justify-center items-center">
      <div className="h-[29.313rem] w-[39.625rem]">
        <input type="text" name="search" id="search" placeholder="Try anything now" required onChange={handleValue} className="w-[39.625rem] h-16 p-5 bg-[var(--bg-theme)] rounded-lg text-[--text-color-theme] fixed" />
        <span className="flex justify-end p-5">
          <button type="submit" form="form1" className="z-[1]" onClick={handleClick}>
            <BiSearch className="text-[#A745EC]" size={20} />
          </button>
        </span>
        <p className="text-3xl mt-11">{inputValue}</p>
        <div className="flex flex-row items-center">
          <p className="mt-11 mr-4">noun</p>
          <hr className="w-[35.563rem] mt-11" />
        </div>
      </div>
    </main>
    //</InputContext>
  );
}
