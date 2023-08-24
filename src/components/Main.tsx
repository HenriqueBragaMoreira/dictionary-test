import useDictionaryAPI, { type ApiResponse } from '@/hooks/free-dictionary-API/free-dictionary.hook'
import { useState } from "react";
import { BiSearch } from "react-icons/bi";


export default function Main() {

  const [dictionaryData, setDictionaryData] = useState<ApiResponse>()
  const [inputValue, setInputValue] = useState("")
  const DictionaryAPI = useDictionaryAPI()

  function handleValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  async function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = await DictionaryAPI.word(inputValue)
    setDictionaryData(data)

    console.log(data)
  }


  return (
    <main className=" w-screen flex flex-row justify-center items-center">
      <div className="h-[29.313rem] w-[39.625rem]">
        <form onSubmit={handleClick}>
          <div className='w-[39.625rem] h-16 bg-[var(--bg-theme)] rounded-lg text-[--text-color-theme] flex items-center'>
          <input className='flex-1 h-full p-5 bg-transparent' type="text" name="search" id="search" placeholder="Try anything now" value={inputValue} required onChange={handleValue} />
            <button type="submit" className="z-[1] p-5 inline-block">
              <BiSearch className="text-[#A745EC]" size={20} />
            </button>
          </div>
        </form>
        <p className="text-3xl mt-11">{inputValue}</p>
        <>
        {
          dictionaryData?.[0].meanings.slice(0, 1).map((meaning) => (
            
            <div className='flex flex-col' key={meaning.partOfSpeech}>
              <div className="flex flex-row items-center">
                <span className="mt-11 mr-4">{meaning.partOfSpeech}</span>
                <hr className="w-[35.563rem] mt-11" />
              </div>
              <div className=' mt-7'>
                <p>Meanings</p>
                <ul className=' list-disc mt-6'>{meaning.definitions.slice(0, 3).map((definition) => (
                  <li className=' marker:text-violet-500' key={definition.definition}>{definition.definition}</li>
                  
                ))}
                </ul>
              </div>
              <div className=' mt-10 flex justify-between'>
              Synonyms {''}
                <p className=' space-x-7 text-violet-500'>
                  
                  {dictionaryData?.[0].meanings?.[0].synonyms?.map((synonyms, index) => (
                    <span key={index}>
                      {synonyms}                    
                    </span>
                  ))}
                </p>
              </div>
            </div>
            

          ) ) 



        }
        {

        }
        </>
        
      </div>
    </main>
  );
}
