import Quill from "quill";
import BetterTableSnowTheme from "./themes/better-table-snow";
import TablePicker from "./ui/table-picker";

const Table = Quill.import("modules/table");
const Delta = Quill.import("delta");

class BetterTable extends Table {
  static register() {
    Quill.register("themes/better-table-snow", BetterTableSnowTheme, true);
    Quill.register("ui/table-picker", TablePicker, true);
  }

  constructor(quill, options) {
    super(quill, options);

    const toolbar = quill.getModule("toolbar");
    const input = toolbar.container.querySelector("select.ql-better-table");

    if (toolbar && input) {
      toolbar.addHandler("better-table", this.insertTableUsingGrid);
      toolbar.attach(input);
    }
  }

  insertTableUsingGrid(rows, columns) {
    if (!columns) {
      if (rows.match(/^\d+x\d+$/)) {
        let tmp = rows.split("x");
        columns = parseInt(tmp[0]);
        rows = parseInt(tmp[1]);
      } else {
        return;
      }
    }

    const range = this.quill.getSelection();
    if (range == null) return;
    const delta = new Array(rows).fill(0).reduce((memo) => {
      const text = new Array(columns).fill("\n").join("");
      return memo.insert(text, { table: tableId() });
    }, new Delta().retain(range.index));
    this.quill.updateContents(delta, Quill.sources.USER);
    this.quill.setSelection(range.index, Quill.sources.SILENT);
    Table.prototype.balanceTables.call(this);
  }
}

function tableId() {
  const id = Math.random().toString(36).slice(2, 6);
  return `row-${id}`;
}

export default BetterTable;
