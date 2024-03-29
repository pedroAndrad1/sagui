import { useTable, useGlobalFilter, usePagination } from 'react-table';
import { useEffect, useMemo } from 'react';
import LeftArrow from '../../../components/Arrows/LeftArrow'
import RightArrow from '../../../components/Arrows/RightArrow'
import Input from '../../../components/Input';
import styles from './AdminProfessores.module.scss';
import Link from 'next/link';

const AdminProfessores = () => {

    const data = useMemo(() => [
        {
            email: 'XXXXXXXXXXX', nome: 'Nome do Professor',
            permissao: 'Admin', id: 'id'
        },
        {
            email: 'XXXXXXXXXXX', nome: 'Nome do Professor',
            permissao: 'Professor', id: 'id'
        },
        {
            email: 'XXXXXXXXXXX', nome: 'Nome do Professor',
            permissao: 'Professor', id: 'id'
        },
        {
            email: 'XXXXXXXXXXX', nome: 'Nome do Professor',
            permissao: 'Professor', id: 'id'
        },
    ], [])

    const columns = useMemo(
        () => [
            {
                Header: 'Nome',
                accessor: 'nome' //chave da info para a coluna
            },
            {
                Header: 'Permissão',
                accessor: 'permissao' //chave da info para a coluna
            },
            {
                Header: 'Ações',
                accessor: 'id' //chave da info para a coluna
            },
        ]
        , []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
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
        <section className={styles.wrapper}>
            <div>
                <Input
                    name='Filtro' value={globalFilter}
                    onChange={e => setGlobalFilter(e.target.value)}
                    placeholder='Filtre por qualquer uma das colunas'
                />
                <Link href="admin/professores/salvar">
                    <button>
                        Adicionar
                        <i className="bi bi-plus-lg"></i>
                    </button>
                </Link>
            </div>
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
                                            if (cell.column.id === 'id') {
                                                return (
                                                    <td
                                                        key={`${i}_body_cell`}
                                                        {...cell.getCellProps()}
                                                    >
                                                        {/* Renderizando a cell */}
                                                        <div className={styles.operations}>
                                                            <Link href={`admin/professores/editar/${cell.column.id}`}>
                                                                <i className="bi bi-pencil-square"></i>
                                                            </Link>
                                                            <i className="bi bi-trash-fill"></i>
                                                        </div>
                                                    </td>
                                                )
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
            <div className='pagination'>
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} >
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
                <LeftArrow onClick={() => previousPage()} disabled={!canPreviousPage} />
                <RightArrow onClick={() => nextPage()} disabled={!canNextPage} />
            </div>
        </section>
    )
}

export default AdminProfessores;