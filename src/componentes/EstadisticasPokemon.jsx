export default function EstadisticasPokemon({idP,baseP,pesoP}){
    return <div className="flex flex-row items-center gap-3 text-base mm:text-2xl mm:gap-5">
        <h2>
        Id
        <br />
        {idP}
      </h2>
      <h2>
        Experiencia base
        <br />
        {baseP}
      </h2>
      <h2>
        Peso
        <br />
        {pesoP}
      </h2>
    </div>
}