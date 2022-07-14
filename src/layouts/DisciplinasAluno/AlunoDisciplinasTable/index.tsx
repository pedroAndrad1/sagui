import styles from "./AlunoDisciplinasTable.module.scss";
import React, { useMemo } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import Input from "../../../components/Input";
import RightArrow from "../../../components/Arrows/RightArrow";
import LeftArrow from "../../../components/Arrows/LeftArrow";

export default function AlunoDisciplinasTable({ disciplinasCursadas }) {
  const data = useMemo(() => disciplinasCursadas, [disciplinasCursadas]);

  const columns = useMemo(
    () => [
      {
        Header: "Código",
        accessor: "codigo", //chave da info para a coluna
      },
      {
        Header: "Nome",
        accessor: "nome", //chave da info para a coluna
      },
      {
        Header: "Status",
        accessor: "status", //chave da info para a coluna
      },
      {
        Header: "Qtd. de Reprovações",
        accessor: "qts_reprovacoes", //chave da info para a coluna
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
    <>
      <Input
        name="filtro"
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Filtre por qualquer uma das colunas"
      />
      {/* Aplicando as props */}
      <table {...getTableProps()} cellSpacing={0} className={styles.table}>
        <thead>
          {/* Fazendo um looping para as linhas de header */}
          {headerGroups.map((headerGroup, i) => (
            // Aplicando as props de header
            <tr {...headerGroup.getHeaderGroupProps()} key={`${i}_header_row`}>
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
                      if (cell.column.id === "status") {
                        /**Isso seria mais simples com styled-components,
                         * eu sei... My bad.
                         */
                        switch (cell.value) {
                          case "Matriculado":
                            //Aplicando as props de cell
                            return (
                              <td
                                key={`${i}_body_cell`}
                                {...cell.getCellProps()}
                                className={styles.cursando}
                              >
                                {/* Renderizando a cell */}
                                {cell.render("Cell")}
                              </td>
                            );
                          case "Aprovado":
                            return (
                              <td
                                key={`${i}_body_cell`}
                                {...cell.getCellProps()}
                                className={styles.aprovado}
                              >
                                {/* Renderizando a cell */}
                                {cell.render("Cell")}
                              </td>
                            );
                          case "Reprovado":
                            return (
                              <td
                                key={`${i}_body_cell`}
                                {...cell.getCellProps()}
                                className={styles.reprovado}
                              >
                                {/* Renderizando a cell */}
                                {cell.render("Cell")}
                              </td>
                            );
                        }
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
        <LeftArrow onClick={() => previousPage()} disabled={!canPreviousPage} />
        <RightArrow onClick={() => nextPage()} disabled={!canNextPage} />
      </div>
    </>
  );
}
