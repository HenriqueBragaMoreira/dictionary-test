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
      <div className="lg:h-[29.313rem] lg:w-[39.625rem] sm:w-96 md:w-128">
        <form onSubmit={handleClick}>
          <div className='lg:w-[39.625rem] sm:w-96 md:w-128 h-16 bg-[var(--bg-theme)] rounded-lg text-[--text-color-theme] flex items-center'>
          <input className='flex-1 lg:w-[39.625rem] sm:w-96 md:w-128 h-full p-5 bg-transparent' type="text" name="search" id="search" placeholder="Try anything now" value={inputValue} required onChange={handleValue} />
            <button type="submit" className="z-[1] p-5 inline-block">
              <BiSearch className="text-[#A745EC]" size={20} />
            </button>
          </div>
        </form>
        <p className="lg:text-3xl text-lg sm:text-base mt-11"><strong>{inputValue}</strong></p>
        <>
        {
          dictionaryData?.[0].meanings.slice(0, 1).map((meaning) => (
            
            <div className='flex flex-col lg:w-[39.625rem] sm:w-96 md:w-128' key={meaning.partOfSpeech}>
              <div className="flex flex-row items-center">
                <span className="mt-11 mr-4">{meaning.partOfSpeech}</span>
                <hr className="w-[35.563rem] mt-11" />
              </div>
              <div className=' mt-7'>
                <p className='text-[#979797]'>Meanings</p>
                <ul className=' list-disc mt-6'>{meaning.definitions.slice(0, 3).map((definition) => (
                  <li className=' marker:text-violet-500 marker:mr-1 mb-5 text-sm' key={definition.definition}>{definition.definition}</li>
                  
                ))}
                </ul>
              </div>
              <div className=' mt-10 flex items-center text-[#979797]'>
              Synonyms {''}
                <p className='text-sm ml-5 space-x-7 text-violet-500'>
                  
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
