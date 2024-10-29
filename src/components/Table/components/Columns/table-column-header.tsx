import { cn } from "@/lib/utils";
import { Toolbar, Tooltip } from "@mui/material";

import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";

interface DataTableColumnHeaderProps {
  column: any;
  title: string;
  className?: string;
  center?: boolean;
  tooltip?: string;
}

export function DataTableColumnHeader({
  column,
  title,
  className,
  center,
  tooltip,
}: DataTableColumnHeaderProps) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    column.toggleSorting();
  };

  return (
    <Toolbar className="!p-0 !min-h-0">
      <div
        className={cn(
          "flex items-center space-x-2",
          className,
          center ? "justify-center" : "justify-start"
        )}
      >
        <button
          id="basic-button"
          onClick={handleClick}
          className="text-nowrap flex items-center h-8 p-0"
        >
          <span>{title}</span>
          {column.getIsSorted() === "desc" ? (
            <ArrowDownIcon className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "asc" ? (
            <ArrowUpIcon className="ml-2 h-4 w-4" />
          ) : null}
        </button>
      </div>
    </Toolbar>
  );
}
