import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnFiltersState,
  SortingState,
} from "@tanstack/react-table";
import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import TableDownloadOptions from "./components/TableDownloadOptions";
import TableViewToggle from "./components/TableViewToggle";
import { DataTablePagination } from "./components/Columns/table-pagination";
import SearchBox from "../SearchBox/SearchBox";

interface CustomTableProps {
  tableData: any[];
  tableColumns: any[];
  theme?: "light" | "dark";
  loading?: boolean;
  downloadOptions?: boolean;
  toggleView?: boolean;
  cardsComponent?: React.ReactNode;
  hideFilters?: boolean;
  bgColor?: string;
  searchPlaceholder?: string;
  onClickCell?: () => void;
}

export default function CustomTable({
  tableData,
  tableColumns,
  theme,
  loading,
  downloadOptions,
  toggleView,
  cardsComponent,
  hideFilters,
  bgColor,
  searchPlaceholder,
  onClickCell,
}: CustomTableProps) {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const [tableView, setTableView] = useState<"table" | "cards">("cards");

  const table = useReactTable({
    data: tableData.reverse() || [],
    columns: tableColumns || [],
    enableSorting: true,
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      globalFilter,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
  });

  const showTableView = !cardsComponent || tableView === "table";
  const showCardsView = cardsComponent && tableView === "cards";

  return (
    <div className={`space-y-4`}>
      {!hideFilters && (
        <>
          <div className="flex items-center space-x-4 justify-between">
            {downloadOptions && <TableDownloadOptions jsonData={tableData} />}
            {toggleView && (
              <TableViewToggle
                alignment={tableView}
                setAlignment={setTableView}
              />
            )}
          </div>
          {showTableView && (
            <>
              <div className="flex items-center space-x-4 justify-between">
                <SearchBox
                  theme={theme}
                  placeholder={
                    searchPlaceholder
                      ? searchPlaceholder
                      : "Search all columns..."
                  }
                  inputValue={globalFilter ?? ""}
                  handleSearch={(e) => setGlobalFilter(e.target.value)}
                />

                <DataTablePagination theme={theme} table={table} />
              </div>
            </>
          )}
        </>
      )}
      <div>
        {showTableView ? (
          <div className="rounded-md border overflow-auto">
            <Table
              style={{
                backgroundColor: bgColor ? bgColor : "#ffffff",
              }}
            >
              <TableHead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header, index) => {
                      return (
                        <TableCell
                          sx={{
                            color: theme === "dark" ? "white" : "black",
                            borderBottom: "1px solid rgba(224, 224, 224, 1)",
                          }}
                          key={header.id}
                          colSpan={header.colSpan}
                          className={`!p-2 ${index === 0 ? "!pl-8" : ""}`}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row, rowIndex) => (
                    <TableRow
                      onClick={onClickCell}
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell, cellIndex) => (
                        <TableCell
                          sx={{
                            color: theme === "dark" ? "white" : "black",
                            borderBottom:
                              rowIndex !== table.getRowModel().rows.length - 1
                                ? "1px solid rgba(224, 224, 224, 1)"
                                : "none",
                          }}
                          className={`!p-1 ${cellIndex === 0 ? "!pl-8" : ""}`}
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : loading ? (
                  <TableRow>
                    <TableCell colSpan={tableColumns.length}>
                      <div className="flex justify-center items-center">
                        <CircularProgress size={20} />
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow>
                    <TableCell colSpan={tableColumns.length}>
                      <div className="flex justify-center items-center h-48">
                        No data available
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        ) : (
          cardsComponent
        )}
      </div>
    </div>
  );
}
