import Input from "../components/Input";
import AppLayout from "../layouts/AppLayout";
import styles from "../styles/jubilamento.module.scss";
import React, { useEffect, useMemo } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import RightArrow from "../components/Arrows/RightArrow";
import LeftArrow from "../components/Arrows/LeftArrow";
import { useRouter } from "next/dist/client/router";
import { useUserContext } from "../contexts/UserContext";

export default function Jubilamento() {
  const router = useRouter();
  const { logado } = useUserContext();

  const data = useMemo(
    () => [
      {
        matricula: "XXXXXXXXXXX",
        nome: "Nome do aluno",
        situacao: "CR menor que sete e mais de 3 reprovação em x",
        detalhes: "link",
      },
      {
        matricula: "XXXXXXXXXXX",
        nome: "Roberto Silva de Sousa",
        situacao: "CR menor que sete e mais de 3 reprovação em x",
        detalhes: "link",
      },
      {
        matricula: "XXXXXXXXXXX",
        nome: "Jéssica Carvalho dos Santos",
        situacao: "CR menor que sete e mais de 3 reprovação em x",
        detalhes: "link",
      },
      {
        matricula: "XXXXXXXXXXX",
        nome: "Nome do aluno",
        situacao: "CR menor que sete e mais de 3 reprovação em x",
        detalhes: "link",
      },
      {
        matricula: "XXXXXXXXXXX",
        nome: "Nome do aluno",
        situacao: "CR menor que sete e mais de 3 reprovação em x",
        detalhes: "link",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Mátricula",
        accessor: "matricula", //chave da info para a coluna
      },
      {
        Header: "Nome",
        accessor: "nome", //chave da info para a coluna
      },
      {
        Header: "Situação",
        accessor: "situacao", //chave da info para a coluna
      },
      {
        Header: "Detalhes",
        accessor: "detalhes", //chave da info para a coluna
      },
    ],
    []
  );

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
    setPageSize,
  } =
    // @ts-ignore
    useTable({ columns, data }, useGlobalFilter, usePagination);

  // @ts-ignore
  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <AppLayout>
      <h1>Alunos em situação de jubilamento</h1>
      <section className={styles.wrapper}>
        <Input
          name="Filtro"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Filtre por qualquer uma das colunas"
        />
        <table {...getTableProps()} cellSpacing={0}>
          <thead>
            {/* Fazendo um looping para as linhas de header */}
            {headerGroups.map((headerGroup, i) => (
              // Aplicando as props de header
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={`${i}_header_row`}
              >
                {headerGroup.headers.map((column, i) => (
                  //Aplicando as props de header cell
                  <th {...column.getHeaderProps()} key={`${i}_header_cell`}>
                    {/* Renderizando a cell */}
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {/* Aplicando as props de body */}
          <tbody {...getTableBodyProps()}>
            {
              //Fazendo um looping nas rows
              page.map((row, i) => {
                //Preparando a row para display
                prepareRow(row);

                return (
                  //Aplicando as props de row
                  <tr
                    {...row.getRowProps()}
                    key={`${i}_body_row`}
                    className="animeLeft"
                  >
                    {
                      //fazendo um looping nas row cells
                      row.cells.map((cell, i) => {
                        if (cell.column.id === "detalhes") {
                          return (
                            <td
                              key={`${i}_body_cell`}
                              {...cell.getCellProps()}
                              className={styles.reprovado}
                            >
                              {/* Renderizando a cell */}
                              <i className="bi bi-search"></i>
                            </td>
                          );
                        } else {
                          return (
                            //Aplicando as props de cell
                            <td key={`${i}_body_cell`} {...cell.getCellProps()}>
                              {/* Renderizando a cell */}
                              {cell.render("Cell")}
                            </td>
                          );
                        }
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <div className="pagination">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[5, 10, 15].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {`Mostar ${pageSize}`}
              </option>
            ))}
          </select>
          <span>{`Página ${pageIndex + 1} de ${pageOptions.length}`}</span>
          <LeftArrow
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          />
          <RightArrow onClick={() => nextPage()} disabled={!canNextPage} />
        </div>
      </section>
    </AppLayout>
  );
}
