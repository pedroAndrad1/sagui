import { useRouter } from "next/dist/client/router";
import React, { useEffect, useMemo } from "react";
import Divider from "../../components/Divider";
import AlunoDisciplinasTable from "../../layouts/DisciplinasAluno/AlunoDisciplinasTable";
import PerfilAluno from "../../layouts/PerfilAluno";
import styles from '../../styles/imprimir-aluno.module.scss';
import { useTable, useGlobalFilter, usePagination } from 'react-table';

export default function ImprimirAluno() {

    useEffect(() => {
        setTimeout(() => window.print(), 1000)

        return () => {
            clearTimeout();
        }
        
    }, []);

    const router = useRouter();
    const { aluno } = router.query;

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
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
        { codigo: 'TINXXXX', nome: 'Nome disciplina', status: 'Aprovado' },
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
    } =
        // @ts-ignore
        useTable({ columns, data }, useGlobalFilter, usePagination)

    return (
        <main className={styles.wrapper}>
            <h1>{aluno}</h1>
            <PerfilAluno />
            <section className={styles.disciplinas_wrapper}>
                <div className={styles.fluxograma}>
                    <img src="/on-work.svg" alt="Em construção" />
                    <span>Futuro Fluxograma aqui</span>
                </div>
                <Divider />
                <div className={styles.disciplinas}>
                    <h2>Disciplinas cursadas</h2>
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
                                rows.map((row, i) => {
                                    //Preparando a row para display
                                    prepareRow(row)

                                    return (
                                        //Aplicando as props de row
                                        <tr {...row.getRowProps()} key={`${i}_body_row`}>
                                            {
                                                //fazendo um looping nas row cells
                                                row.cells.map((cell, i) => {

                                                    if (cell.column.id === 'status') {
                                                        /**Isso seria mais simples com styled-components,
                                                         * eu sei... My bad.
                                                         */
                                                        switch (cell.value) {
                                                            case 'Cursando':
                                                                //Aplicando as props de cell
                                                                return (
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
                                                                return (
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
                                                                return (
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
                </div>
            </section>
        </main>
    )
}