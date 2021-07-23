import styles from './Table.module.scss';

export default function AlunoDisciplinasTable(){
    
    const head = ['Código', 'Nome', 'Status'];
    const body = [
        {codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Cursando'},
        {codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Reprovado'},
        {codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado'},
    ]
    
    
    return(
        <table className={styles.wrapper}>
            <thead>
                <tr>
                {
                    head.map( (headElement, i) => 
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
                            {/**Isso seria mais simples com styled-components, eu sei..
                             * My bad.
                             */}
                            {
                                bodyElement.status == 'Cursando' &&
                                    <td className={styles.cursando}>{bodyElement.status}</td>
                            }
                            {
                                bodyElement.status == 'Aprovado' &&
                                    <td className={styles.aprovado}>{bodyElement.status}</td>
                            }
                            {
                                bodyElement.status == 'Reprovado' &&
                                    <td className={styles.reprovado}>{bodyElement.status}</td>
                            }
                            
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}