import { useMemo } from "react";
import { useTable } from 'react-table';
import styles from './ConfirmacaoMatricula.module.scss';

export default function ConfirmacaoMatricula() {

    //COMPONENTIZAR A TABLE!!!!!!!!!!!!!!!
    
    //Reference https://react-table.tanstack.com/docs/quick-start
    //Tenho que usar o Memo para tabela nao ser recalculada a cada re-render
    const data = useMemo(
        () => [
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
        ]
        , []);

    const columns = useMemo(
        () => [
            {
                Header: 'Data de confirmação',
                accessor: 'data_confirmacao' //chave da info para a coluna
            },
            {
                Header: 'Professor',
                accessor: 'professor' //chave da info para a coluna
            },
            {
                Header: 'Detalhes',
                accessor: 'detalhes' //chave da info para a coluna
            },
        ]
        , []);
   
    
   
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = 
      // Ignore o erro no typeScript, essa lib tem problemas com ele
      // @ts-ignore
      useTable({ columns, data })
   
    
      
      return (
        <section className={styles.wrapper}>
             {/* Aplicando as props */}
            <table {...getTableProps()} >
            <thead>
                {/* Fazendo um looping para as linhas de header */}
                {
                    headerGroups.map( (headerGroup,i) => (
                    // Aplicando as props de header
                    <tr {...headerGroup.getHeaderGroupProps()} key={`${i}_header_row`} >
                    {
                        headerGroup.headers.map( (column, i) => (
                            //Aplicando as props de header cell
                            <th
                                {...column.getHeaderProps()}
                                key={`${i}_header_cell`}
                            >
                                {/* Renderizando a cell */}
                                {column.render('Header')}
                            </th>
                        ))
                    }
                </tr>
                ))}
            </thead>
            {/* Aplicando as props de body */}
            <tbody {...getTableBodyProps()}>
                {   
                    //Fazendo um looping nas rows
                    rows.map( (row,i) => {
                        //Preparando a row para display
                        prepareRow(row)

                        return (
                            //Aplicando as props de row
                            <tr {...row.getRowProps()}  key={`${i}_body_row`}>
                            {   
                                //fazendo um looping nas row cells
                                row.cells.map( (cell, i) => {
                                    return (
                                        //Aplicando as props de cell
                                        <td
                                            key={`${i}_body_cell`}
                                            {...cell.getCellProps()}
                                        >
                                             {/* Renderizando a cell */}
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })
                            }
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </section>
   
      )
}