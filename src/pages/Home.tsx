import { useState } from "react";
import "./style.css";

export default function Home() {
    const [typeAuthor, setTypeAuthor] = useState("");
    const [author, setAuthor] = useState("");
    const [numberAuthors, setNumberAuthors] = useState("");
    const [intellectualResponsibility, setIntellectualResponsibility] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [publisher, setPublisher] = useState("");
    const [editionNumber, setEditionNumber] = useState("");
    const [year, setYear] = useState("");
    const [online, setOnline] = useState(false);
    
    const clearForm = () =>{
        setTypeAuthor("");
        setAuthor("");
        setTitle("");
        setSubtitle("");
        setEditionNumber("");
        setPublisher("");
        setYear("");
        setOnline(false)
        setNumberAuthors("1");
    }


    return (
        <div>
            <div className="flex flex-col justify-center items-center landing-container">
                <h1 className="text-5xl">CIRA</h1>
                <h3 className="text-4xl text-secondary">Gerador de Referências</h3>
                <button className="user-select-none text-white font-bold py-2 px-4 rounded-full">Gerar</button>
            </div>

            <div className="flex flex-col justify-center items-center form-container">
                <form>
                    <div className="mx-auto grid md:grid-cols-3 md:gap-6">
                        <div className="mb-2">
                            <label htmlFor="" className="required">Tipo do Autor</label>
                            <select value={typeAuthor} onChange={(e) => setTypeAuthor(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Pessoa(s) Física(s)</option>
                            </select>                    
                            </div>
                        <div className="mb-2">
                            <label htmlFor="" className="required">Responsabilidade Intelectual</label>
                            <select value={intellectualResponsibility} onChange={(e) => setIntellectualResponsibility(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Autor da Obra</option>
                            </select>  
                        </div>
                        {/* <div className="mb-2">
                            <label htmlFor="">Forma Abreviada p/ mais de 3 Autores?</label>
                            <select value={typeAuthor} onChange={(e) => setTypeAuthor(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Autor da Obra</option>
                            </select>  
                        </div> */}
                        <div className="mb-2">
                            <label htmlFor="typeAuthor" className="required">Quantidade de Autores</label>
                            <select name="typeAuthor" value={numberAuthors} onChange={(e) => setNumberAuthors(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>Mais de 3 (forma abreviada)</option>
                            </select> 
                        </div>
                        <div className="mb-2">
                            <label htmlFor="" className="required">Autor</label>
                            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="João Enrique" required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="" className="required">Título</label>
                            <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Título do livro" required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Subtítulo</label>
                            <input type="text"  value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subtitulo do livro" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">N° da Edição</label>
                            <input type="number" value={editionNumber} onChange={(e) => setEditionNumber(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="10" required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="" className="required">Editora</label>
                            <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome da editora" required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="" className="required">Ano (aaaa)</label>
                            <input type="text" value={year} onChange={(e) => setYear(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2025" required />
                        </div>

                        
                        <div className="mb-5">
                            <label className="inline-flex items-center cursor-pointer">
                            <input onChange={() => setOnline(!online)} type="checkbox" value="" className="sr-only peer" checked={online}/>
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                            <span className="ml-2"> On-Line?</span>
                            </label>
                        </div>

                        {/* link se for online */}
                        {online ? (
                            <>
                                <div className="mb-2">
                                    <label htmlFor="" className="required">Link (URL)</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://google.com" required />
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="" className="required">Data de acesso</label>
                                    <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2025" required />
                                </div>
                            </>
                        ) : null}
                    </div>

                    <div className="flex buttons-container">
                        <button type="button" onClick={clearForm} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Limpar</button>
                        <button type="submit" className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Gerar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
  