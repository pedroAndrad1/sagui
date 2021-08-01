import styles from './AlunoDisciplinasTable.module.scss';
import React, { useMemo } from "react";
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import Input from "../../../components/Input";
import RightArrow from '../../../components/Arrows/RightArrow';
import LeftArrow from "../../../components/Arrows/LeftArrow";

export default function AlunoDisciplinasTable() {

    const data = useMemo(() => [
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Cursando' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Reprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Me ache 1', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Me ache 2', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Me ache 3', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Me ache 4', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
    ], [])

    const columns = useMemo(
        () => [
            {
                Header: 'Código',
                accessor: 'codigo' //chave da info para a coluna
            },
            {
                Header: 'Nome',
                accessor: 'nome' //chave da info para a coluna
            },
            {
                Header: 'Status',
                accessor: 'status' //chave da info para a coluna
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
        <>
            <div>
                <div className={styles.filtro}>
                    <Input name='filtro' value={globalFilter} onChange={e => setGlobalFilter(e.target.value)}
                        placeholder='Filtre por qualquer uma das colunas'
                    />
                </div>
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

                                            if (cell.column.id === 'status') {
                                                console.log(cell.value)
                                                switch (cell.value) {
                                                    case 'Cursando':
                                                        //Aplicando as props de cell
                                                        return(
                                                            <td
                                                            key={`${i}_body_cell`}
                                                            {...cell.getCellProps()}
                                                            className={styles.cursando}
                                                        >
                                                            {/* Renderizando a cell */}
                                                            {cell.render('Cell')}
                                                        </td>
                                                        )
                                                    case 'Aprovado':
                                                        return(
                                                            <td
                                                            key={`${i}_body_cell`}
                                                            {...cell.getCellProps()}
                                                            className={styles.aprovado}
                                                        >
                                                            {/* Renderizando a cell */}
                                                            {cell.render('Cell')}
                                                        </td>
                                                        )
                                                    case 'Reprovado':
                                                        return(
                                                            <td
                                                            key={`${i}_body_cell`}
                                                            {...cell.getCellProps()}
                                                            className={styles.reprovado}
                                                        >
                                                            {/* Renderizando a cell */}
                                                            {cell.render('Cell')}
                                                        </td>
                                                        )
                                                }
                                            }
                                            else {
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
            {/* <table cellSpacing={0}>
                <thead>
                    <tr>
                        {
                            head.map((headElement, i) =>
                                <th key={`${headElement}_${i}`}>{headElement}</th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        body.map((bodyElement, i) => {
                            return (
                                <tr key={`${bodyElement}_${i}`}>
                                    <td>{bodyElement.codigo}</td>
                                    <td>{bodyElement.nome}</td>
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
        */}
        </>
    )
    /**Isso seria mais simples com styled-components, eu sei..
    * My bad.
    */
}