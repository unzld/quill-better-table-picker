// import better-table styles file
import "src/assets/quill-better-table-picker.scss";
import QuillBetterTable from "src/quill-better-table-picker.js";

Quill.register(
  {
    "modules/better-table": QuillBetterTable,
  },
  true
);

window.onload = () => {
  const quill = new Quill("#editor-wrapper", {
    theme: "better-table-snow",
    modules: {
      "better-table": true,

      toolbar: [
        ["clean"],
        [
          {
            list: "ordered",
          },
          {
            list: "bullet",
          },
        ],
        [
          {
            indent: "-1",
          },
          {
            indent: "+1",
          },
        ],
        [
          "bold",
          "italic",
          "underline",
          "strike",
          {
            script: "super",
          },
          {
            script: "sub",
          },
        ],
        [
          "link",
          {
            "better-table": [],
          },
        ],
      ],
    },
  });

  let tableModule = quill.getModule("better-table");
  document.body.querySelector("#insert-table").onclick = () => {
    tableModule.insertTableUsingGrid(3, 3);
  };

  document.body.querySelector("#get-table").onclick = () => {
    console.log(tableModule.getTable());
  };

  document.body.querySelector("#get-contents").onclick = () => {
    console.log(quill.getContents());
  };
};
