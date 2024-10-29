import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

import {
  Select as X,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ButtonS } from "@/components/ui/button";
import { MenuItem, Select } from "@mui/material";

interface DataTablePaginationProps {
  table: any;
  theme?: "light" | "dark";
}

export function DataTablePagination({ table, theme }: DataTablePaginationProps) {
  return (
    <div className="flex items-center justify-between px-2 gap-2">
      {/* <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div> */}
      <div>
        <p
          style={{
            color: theme === "dark" ? "#fff" : "#000",
          }}
          className="text-sm"
        >
          Total: <span className="font-semibold">{table.getFilteredRowModel().rows.length}</span>{" "}
          item
          {table.getFilteredRowModel().rows.length > 1 ? "(s)" : ""}
        </p>
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p
            style={{
              color: theme === "dark" ? "#fff" : "#000",
            }}
            className="text-sm"
          >
            Items per page
          </p>
          <Select
            sx={{
              "& .MuiSelect-select": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme === "dark" ? "white !important" : "#e2e8f0 !important",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: theme === "dark" ? "white !important" : "#e2e8f0 !important",
              },
              "& .MuiSelect-icon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
            }}
            size="small"
            value={`${table.getState().pagination.pageSize}`}
            onChange={(event) => {
              table.setPageSize(Number(event.target.value));
            }}
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <MenuItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div
          className="flex w-[100px] items-center justify-center text-sm font-medium"
          style={{
            color: theme === "dark" ? "#fff" : "#000",
          }}
        >
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <ButtonS
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="h-4 w-4" />
          </ButtonS>
          <ButtonS
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </ButtonS>
          <ButtonS
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </ButtonS>
          <ButtonS
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="h-4 w-4" />
          </ButtonS>
        </div>
      </div>
    </div>
  );
}
