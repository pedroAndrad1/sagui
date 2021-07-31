import React, { useMemo, useState } from "react";
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import Input from "../../components/Input";
import RightArrow from '../../components/Arrows/RightArrow';
import styles from './ConfirmacaoMatricula.module.scss';
import LeftArrow from "../../components/Arrows/LeftArrow";

export default function ConfirmacaoMatricula() {
    // Ignore o erro no typeScript, essa lib react-bable tem problemas com ele

    //COMPONENTIZAR A TABLE!!!!!!!!!!!!!!!
    //Reference https://react-table.tanstack.com/docs/quick-start

    //Tenho que usar o Memo para tabela nao ser recalculada a cada re-render
    const data = useMemo(
        () => [
            { data_confirmacao: '19-99-9999', professor: 'Amanda', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
            { data_confirmacao: '99-99-9999', professor: 'teste', detalhes: 'link' },
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
        state,
        // @ts-ignore
        page,
        // @ts-ignore
        pageOptions,
        // @ts-ignore
        nextPage,
        // @ts-ignore
        canNextPage,
        // @ts-ignore
        canPreviousPage,
        // @ts-ignore
        previousPage,
        // @ts-ignore
        setGlobalFilter,
        // @ts-ignore
        setPageSize
    } =
        // @ts-ignore
        useTable({ columns, data }, useGlobalFilter, usePagination)

    // @ts-ignore
    const { globalFilter, pageIndex, pageSize } = state;

    return (
        <section className={styles.wrapper} >
            <div className={styles.filtro}>
                <Input name='filtro' value={globalFilter} onChange={e => setGlobalFilter(e.target.value)}
                    placeholder='Filtre por qualquer uma das colunas'
                />
            </div>
            {/* Aplicando as props */}
            <table {...getTableProps()} cellSpacing={0} >
                <thead>
                    {/* Fazendo um looping para as linhas de header */}
                    {
                        headerGroups.map((headerGroup, i) => (
                            // Aplicando as props de header
                            <tr {...headerGroup.getHeaderGroupProps()} key={`${i}_header_row`} >
                                {
                                    headerGroup.headers.map((column, i) => (
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
                        page.map((row, i) => {
                            //Preparando a row para display
                            prepareRow(row)

                            return (
                                //Aplicando as props de row
                                <tr {...row.getRowProps()} key={`${i}_body_row`} className='animeLeft'>
                                    {
                                        //fazendo um looping nas row cells
                                        row.cells.map((cell, i) => {
                                            if (cell.column.id === 'detalhes') {
                                                return (
                                                    //Aplicando as props de cell
                                                    <td
                                                        key={`${i}_body_cell`}
                                                        {...cell.getCellProps()}
                                                    >
                                                        {/* Renderizando a cell */}
                                                        <i className="bi bi-search"></i>
                                                    </td>
                                                )
                                            }
                                            else{
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
                                            }
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className={styles.pagination}>
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [5, 10, 15].map(pageSize =>
                            <option key={pageSize} value={pageSize}>
                                {`Mostar ${pageSize}`}
                            </option>
                        )
                    }
                </select>
                <span>
                    {`Página ${pageIndex + 1} de ${pageOptions.length}`}
                </span>
                <LeftArrow onClick={() => previousPage()} disabled={!canPreviousPage}/>
                <RightArrow onClick={() => nextPage()} disabled={!canNextPage}/>
            </div>
        </section>

    )
}