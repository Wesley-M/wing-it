import reactElementToJSXString from 'react-element-to-jsx-string';
import {evaluate} from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import {useEffect, useState} from "react";
import rehypePrism from "@mapbox/rehype-prism";
import {SourceCodeDialog} from "./SourceCodeDialog.jsx";
import {Box} from "@mui/material";

export const ShowCodeBlock = ({children}) => {
  const [open, setOpen] = useState(false);
  const [exports, setExports] = useState({default: runtime.Fragment});
  const childrenString = `\`\`\`jsx \n${reactElementToJSXString(children).trim()} \n \`\`\``

  // When the children change, it also changes the evaluation of the code block
  useEffect(() => {
    evaluate(childrenString, {...runtime, rehypePlugins: [rehypePrism]})
      .then((exports) => setExports(exports));
  }, [childrenString]);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const CodeBlock = exports.default;

  return (
    <>
      <Box onClick={handleOpen}>
        {children}
      </Box>
      <SourceCodeDialog
        open={open}
        onClose={handleClose}
        component={children}
        Source={CodeBlock}
      />
    </>
  )
}