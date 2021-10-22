# quill-better-table-picker
An extension of the table module for Quill, with support for toolbar table picker. For this to work I had to extend snow theme.

# Requirements
[quilljs](https://github.com/quilljs/quill) v2.0.0-dev.3

Since I use webpack externals to bundle, you must expose `Quill` to window object, like load quill.js by script tag globally. Or you may need to fork this repo and build what you need.

# Installation
```
npm install @unzld/quill-better-table-picker
```

# Usage
Load quill and style dependencies
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/quill/2.0.0-dev.3/quill.min.js" type="text/javascript"></script>
```
```
<link href="https://cdnjs.cloudflare.com/ajax/libs/quill/2.0.0-dev.3/quill.snow.min.css" rel="stylesheet">
<link href="https://unpkg.com/quill-better-table-picker@1.2.8/dist/quill-better-table-picker.css" rel="stylesheet">
```

ES6
```
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
};
```

# License
[MIT License](https://rmm5t.mit-license.org/)
