import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import jsPDF from "jspdf";

interface DataItem {
  [key: string]: any;
}

interface TableDownloadOptionsProps {
  jsonData: DataItem[];
}

const TableDownloadOptions: React.FC<TableDownloadOptionsProps> = ({
  jsonData,
}) => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);

    if (newAlignment === "csv") {
      downloadCSV();
    } else if (newAlignment === "pdf") {
      downloadPDF();
    } else if (newAlignment === "copy") {
      copyToClipboard();
    }
  };

  const downloadCSV = () => {
    const csvData = jsonToCsv(jsonData);
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "data.csv";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const jsonToCsv = (jsonData: DataItem[]): string => {
    let csv = "";
    const headers = Object.keys(jsonData[0]);
    csv += headers.join(",") + "\n";
    jsonData.forEach((obj) => {
      const values = headers.map((header) => obj[header]);
      csv += values.join(",") + "\n";
    });
    return csv;
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const headers = Object.keys(jsonData[0]);

    let yPos = 10;
    doc.setFontSize(12);

    doc.text(headers.join("  "), 10, yPos);
    yPos += 10;

    jsonData.forEach((row) => {
      const rowData = headers.map((header) => row[header]).join("  ");
      doc.text(rowData, 10, yPos);
      yPos += 10;
    });

    doc.save("data.pdf");
  };

  const copyToClipboard = () => {
    const csvData = jsonToCsv(jsonData);
    navigator.clipboard
      .writeText(csvData)
      .then(() => {
        alert("Data copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="copy">Copy</ToggleButton>
        <ToggleButton value="csv">CSV</ToggleButton>
        <ToggleButton value="excel">Excel</ToggleButton>
        <ToggleButton value="pdf">PDF</ToggleButton>
        <ToggleButton value="print">Print</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default TableDownloadOptions;
