import { useState } from "react";
import "./style.css";

export default function Home() {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [typeAuthor, setTypeAuthor] = useState("");
    const [numberAuthors, setNumberAuthors] = useState("1");
    const [intellectualResponsibility, setIntellectualResponsibility] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [publisher, setPublisher] = useState("");
    const [editionNumber, setEditionNumber] = useState("");
    const [location, setLocation] = useState("");
    const [year, setYear] = useState("");
    const [online, setOnline] = useState(false);
    const [link, setLink] = useState("");
    const [acessData, setAcessData] = useState("");
    const [authors, setAuthors] = useState([""]);

    const [referenceResult, setReferenceResult] = useState("");
    const [citationTextResult, setCitationTextResult] = useState("");
    const [titleResult, setTitleResult] = useState("");
    const [subtitleResult, setSubtitleResult] = useState("");
    const [publisherResult, setPublisherResult] = useState("");
    const [editionNumberResult, setEditionNumberResult] = useState("");
    const [locationResult, setLocationResult] = useState("");
    const [yearResult, setYearResult] = useState("");
    const [linkResult, setLinkResult] = useState("");
    const [acessDataResult, setAcessDataResult] = useState("");
    
    const clearForm = () =>{
        setTypeAuthor("");
        setTitle("");
        setSubtitle("");
        setEditionNumber("");
        setPublisher("");
        setYear("");
        setOnline(false)
        setNumberAuthors("1");

        clearResult()
    }

    const clearResult = () => {
        setCitationTextResult("")
        setReferenceResult("")
        setTitleResult(``)
        setSubtitleResult("")
        setPublisherResult(``)
        setLocationResult("")
        setYearResult(``)
        setLinkResult("")
        setAcessDataResult("");
        setEditionNumberResult("")
    }

    const handleSubmit = (): void => {
        clearResult();
        if(!validateForm()) return;

        const { citationTextResult, fullName } = formattName(authors);
        const newTitle = !subtitle ? `${title}.` : title;

        setCitationTextResult(citationTextResult)
        setReferenceResult(fullName)
        setTitleResult(`${changeToCapitalLetters(newTitle.split(" "))}`)
        setSubtitleResult(subtitle ? `: ${subtitle}. ` : "")
        setPublisherResult(` ${changeToCapitalLetters(publisher.split(" "))}, `)
        setLocationResult(location ? ` ${location}: ` : "")
        setYearResult(`${year}. `)
        setLinkResult(link)
        setAcessDataResult(acessData);
        setEditionNumberResult(editionNumber ? ` ${editionNumber}. ed.` : "")
    } 

    const validateForm = (): boolean => {
        const newErrors: { [key: string]: string } = {};
        // if (!author.trim()) newErrors.author = "O autor é obrigatório";
        if (!title.trim()) newErrors.title = "O título é obrigatório";
        if (!publisher.trim()) newErrors.publisher = "A editora é obrigatória";
        if (!year.trim()) newErrors.year = "O ano é obrigatório";
        if (online && !link.trim()) newErrors.link = "O link é obrigatório";
        if (online && !acessData.trim()) newErrors.acessData = "A data de acesso é obrigatória";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const formattName = (authorsArray: string[]) => {
        const formattedAuthors = authorsArray.map((name) => {
          const parts = name.trim().split(" ");
          const lastName = parts.pop()?.toUpperCase();
          const firstNames = changeToCapitalLetters(parts);
          return name.split(" ").length > 1 ? `${lastName}, ${firstNames}` : `${lastName}`;
        });
      
        let fullName = "";
        let citationTextResult = "";
      
        if (numberAuthors === "1") {
          fullName = `${formattedAuthors[0]}.`;
          citationTextResult = `${formattedAuthors[0].split(",")[0]}, (${year})`;
        } else if (numberAuthors === "2") {
          fullName = `${formattedAuthors[0]}; ${formattedAuthors[1]}.`;
          citationTextResult = `${formattedAuthors[0].split(",")[0]} e ${formattedAuthors[1].split(",")[0]}, (${year})`;
        } else if (numberAuthors === "3") {
          fullName = `${formattedAuthors[0]}; ${formattedAuthors[1]}; ${formattedAuthors[2]}.`;
          citationTextResult = `${formattedAuthors[0].split(",")[0]} et al., (${year})`;
        } else {
          // Mais de 3 autores
          fullName = `${formattedAuthors[0]} et al.`;
          citationTextResult = `${formattedAuthors[0].split(",")[0]} et al., (${year})`;
        }
      
        return { fullName, citationTextResult };
      };

    const changeToCapitalLetters = (text: Array<string>): string => {
        const words = text;

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        return words.join(" ");
    }

    return (
        <div>
            <header className="flex flex-col justify-center items-center landing-container">
                <h1 className="text-5xl">CIRA</h1>
                <h3 className="text-4xl text-secondary">Gerador de Referências</h3>
                {/* <button className="user-select-none text-white font-bold py-2 px-4 rounded-full">Gerar</button> */}
            </header>

            <section className="flex flex-col justify-center items-center form-container">
                <form onSubmit={((e) => { e.preventDefault(); handleSubmit() })}>
                    <div className="mx-auto grid md:grid-cols-3 md:gap-6">
                        <div className="mb-5 md:mb-2">
                            <label htmlFor="" className="required">Tipo do Autor</label>
                            <select value={typeAuthor} onChange={(e) => setTypeAuthor(e.target.value)} className={`${errors.typeAuthor ? "border-red-500" : ""} ^bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
                                <option>Pessoa(s) Física(s)</option>
                            </select>                    
                        </div>
                        <div className="mb-5 md:mb-2">
                            <label htmlFor="" className="required">Responsabilidade Intelectual</label>
                            <select value={intellectualResponsibility} onChange={(e) => setIntellectualResponsibility(e.target.value)} className={`${errors.intellectualResponsibility ? "border-red-500" : ""} ^bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
                                <option>Autor da Obra</option>
                            </select>  
                        </div>

                        <div className="mb-5 md:mb-2">
                            <label htmlFor="typeAuthor" className="required">Quantidade de Autores</label>
                            <select name="typeAuthor" value={numberAuthors} onChange={(e) => setNumberAuthors(e.target.value)} className={`${errors.numberAuthors ? "border-red-500" : ""} ^bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="Mais de 3 (forma abreviada)">Mais de 3 (forma abreviada)</option>
                            </select> 
                        </div>
                        
                        
                        {numberAuthors === "Mais de 3 (forma abreviada)" && (
                            <div className="mb-5 md:mb-2">
                                <label htmlFor="" className="required">Autor 1 </label>
                                <input
                                    key={0}
                                    type="text"
                                    value={authors[0] || ""}
                                    onChange={(e) => {
                                        const newAuthors = [...authors];
                                        newAuthors[0] = e.target.value;
                                        setAuthors(newAuthors);
                                    }}
                                    className={`${errors.author ? "border-red-500" : ""} ^bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                    placeholder={`Autor 1`}
                                />
                            </div>
                        )}

                        {numberAuthors !== "Mais de 3 (forma abreviada)" &&
                        [...Array(Number(numberAuthors))].map((_, index) => (
                            <div className="mb-5 md:mb-2">
                                <label htmlFor="" className="required">Autor {index +1} </label>
                                <input
                                    key={index}
                                    type="text"
                                    value={authors[index] || ""}
                                    onChange={(e) => {
                                        const newAuthors = [...authors];
                                        newAuthors[index] = e.target.value;
                                        setAuthors(newAuthors);
                                    }}
                                    className={`${errors.author ? "border-red-500" : ""} ^bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                    placeholder={`Autor ${index + 1}`}
                                />
                            </div>
                        ))}


                        <div className="mb-5 md:mb-2">
                            <label htmlFor="" className="required">Título</label>
                            <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)} className={`${errors.title ? "border-red-500" : ""} ^bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Título do livro" />
                            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                        </div>
                        <div className="mb-5 md:mb-2">
                            <label htmlFor="">Subtítulo</label>
                            <input type="text"  value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className={`${errors.subtitle ? "border-red-500" : ""} ^bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Subtitulo do livro" />
                            {errors.subtitle && <p className="text-red-500 text-sm mt-1">{errors.subtitle}</p>}
                        </div>
                        <div className="mb-5 md:mb-2">
                            <label htmlFor="">N° da Edição</label>
                            <input type="number" value={editionNumber} onChange={(e) => setEditionNumber(e.target.value)} className={`${errors.editionNumber ? "border-red-500" : ""} ^bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="10" />
                            {errors.editionNumber && <p className="text-red-500 text-sm mt-1">{errors.editionNumber}</p>}
                        </div>
                        <div className="mb-5 md:mb-2">
                            <label htmlFor="">Local (Cidade)</label>
                            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className={`${errors.location ? "border-red-500" : ""} ^bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="São Paulo" />
                            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                        </div>
                        <div className="mb-5 md:mb-2">
                            <label htmlFor="" className="required">Editora</label>
                            <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} className={`${errors.publisher ? "border-red-500" : ""} ^bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Nome da editora" />
                            {errors.publisher && <p className="text-red-500 text-sm mt-1">{errors.publisher}</p>}
                        </div>
                        <div className="mb-5 md:mb-2">
                            <label htmlFor="" className="required">Ano (aaaa)</label>
                            <input type="text" value={year} onChange={(e) => setYear(e.target.value)} className={`${errors.year ? "border-red-500" : ""} ^bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="2025" />
                            {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
                        </div>

                        
                        <div className="mb-5 md:mb-2">
                        <label htmlFor="">&nbsp;</label>
                            <div>
                                <label className="inline-flex items-center cursor-pointer">
                                <input onChange={() => setOnline(!online)} type="checkbox" value="" className="sr-only peer" checked={online}/>
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                                <span className="ml-2"> On-Line?</span>
                                </label>
                            </div>
                        </div>

                        {/* link se for online */}
                        {online ? (
                            <>
                                <div className="mb-5 md:mb-2">
                                    <label htmlFor="" className="required">Link (URL)</label>
                                    <input type="text" value={link} onChange={(e) => setLink(e.target.value)} className={`${errors.link ? "border-red-500" : ""} ^bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="https://google.com" />
                                    {errors.link && <p className="text-red-500 text-sm mt-1">{errors.link}</p>}
                                </div>

                                <div className="mb-5 md:mb-2">
                                    <label htmlFor="" className="required">Data de acesso</label>
                                    <input type="date" value={acessData} onChange={(e) => setAcessData(e.target.value)} className={`${errors.acessData ? "border-red-500" : ""} ^bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="2025" />
                                    {errors.acessData && <p className="text-red-500 text-sm mt-1">{errors.acessData}</p>}
                                </div>
                            </>
                        ) : null}
                    </div>

                    {referenceResult ? (
                        <div className="result mt-3 mb-5">
                            <p>
                                <span className="bold">Citação: <br /> </span> 
                                <div className="result-container"> { citationTextResult }</div>
                            </p>

                            <br />
                            
                            <p>
                                <span className="bold">Referência: </span> 
                                
                                <div className="result-container">
                                    { referenceResult }  {/* nome */}
                                    <span className="bold"> {titleResult}</span>
                                    { subtitleResult ?? subtitleResult}
                                    { editionNumberResult ?? editionNumberResult}
                                    { locationResult ?? locationResult}
                                    { publisherResult }
                                    { yearResult }
                                    {online ? (
                                        <>
                                            Disponível: {linkResult}. Acesso em: {acessDataResult}
                                        </>
                                    ) : null }
                                </div>
                            </p>
                        </div>
                    ) : null}

                    <div className="mt-5 flex buttons-container">
                        <button type="button" onClick={clearForm} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Limpar</button>
                        <button type="submit" className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Gerar</button>
                    </div>
                </form>
            </section>

            <footer className="flex flex-col justify-center items-center">
                <h3 className="text-2xl text-footer">
                    Desenvolvido por: <a href="https://joaoenrique.github.io/">João Enrique</a>
                </h3>
            </footer>
        </div>
    );
}
  