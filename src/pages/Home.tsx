import "./style.css"

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center landing-container">
            <h1 className="text-5xl">CIRA</h1>
            <h3 className="text-4xl text-secondary">Gerador de Referências</h3>
            <button className="user-select-none text-white font-bold py-2 px-4 rounded-full">Gerar</button>
        </div>
    );
}
  