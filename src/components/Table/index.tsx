export default function Table(){
    
    const heade = ['Código', 'Nome', 'Status'];
    const body = [
        {codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Status'},
        {codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Status'},
        {codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Status'},
        {codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Status'},
        {codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Status'},
        {codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Status'},
    ]
    
    
    return(
        <table>
            <thead>
                <tr>
                {
                    heade.map( (headElement, i) => 
                     <th key={`${headElement}_${i}`}>{headElement}</th> 
                    )    
                }
                </tr>
            </thead>
            <tbody>
            {
                body.map( (bodyElement,i) =>{
                    return(
                        <tr key={`${bodyElement}_${i}`}>
                            <td>{bodyElement.codigo}</td>
                            <td>{bodyElement.nome}</td>
                            <td>{bodyElement.status}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}