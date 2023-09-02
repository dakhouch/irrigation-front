import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import {Button} from "antd";
import {PrinterOutlined} from "@ant-design/icons";

export const ExportToExcel = ({ apiData, fileName,sheetName }) => {
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const exportToCSV = (apiData, fileName) => {
        console.log(apiData);
        const ws = XLSX.utils.json_to_sheet(apiData);
        const wb = { Sheets: { [sheetName]: ws }, SheetNames: [sheetName] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    };

    return (
        <Button
            icon={<PrinterOutlined />}
            className={"bg-white"}
            onClick={(e) => exportToCSV(apiData, fileName,sheetName)}
        >
            Imprimer
        </Button>
    );
};
