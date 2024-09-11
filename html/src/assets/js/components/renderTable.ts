import { charSplitOnCaps, el, formatData } from "./helpers";


const renderTable = <T>(res: T[], className: string = 'currencies'): HTMLDivElement => {
    // console.log(res);

    const tableWrap = el('div', { className: `${className}-wrap`}) as HTMLDivElement;
    const table =  el('table', { className }) as HTMLTableElement;
    const thead = Object.keys(res[0]).map((key) => {

        const th = el('th', {
            textContent: charSplitOnCaps(key)
        });

        return th as HTMLTableCellElement;
    });

    const cellData = res.map((cellRow) => {
        const tcells = Object.values(cellRow).map((val) => {
            const cell = document.createElement('td');
            cell.append(formatData(val));
            
            return cell;
        });

        return trow(tcells)
    });

    table.append(
        trow(thead),
        ...cellData
    );

    tableWrap.append(table);

    return tableWrap;
}


const trow = (cells:HTMLTableCellElement[]) => {
    const tr = document.createElement('tr');
    tr.append(...cells);
    return tr;
}

export default renderTable;