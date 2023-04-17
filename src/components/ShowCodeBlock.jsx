import {evaluate} from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import {useEffect, useState} from "react";
import rehypePrism from "@mapbox/rehype-prism";
import {SourceCodeDialog} from "./SourceCodeDialog.jsx";
import {Box} from "@mui/material";

export const ShowCodeBlock = ({children, componentUrl}) => {
  const [open, setOpen] = useState(false);
  const [sourceCode, setSourceCode] = useState({default: runtime.Fragment});

  /**
   * It formats a block code as in a markdown
   */
  const markdownBlockCode = "```jsx \n{} \n ```"
  
  /**
   * It gets the source code of a component from Github
   * and sets it in the state
   * @param componentUrl - The url of the component
   * */
  const getSourceCodeOnGithub = async (componentUrl) => {
    const baseUrl = "https://raw.githubusercontent.com/Wesley-M/wing-it/main/src/pages/components/{}.jsx"
    const githubUrl = baseUrl.replace("{}", componentUrl)
    const response = await fetch(githubUrl)
    return await response.text()
  }

  /***
   * It formats the source code passed as component Url
  */
  useEffect(() => {
    if (componentUrl) {
      getSourceCodeOnGithub(componentUrl).then(data => {
        markdownBlockCode.replace("{}", data)
      })
    }
  }, [componentUrl]);

  /** 
   * When the source code changes, then re-evaluate the 
   * rendered markdown
   * */ 
  useEffect(() => {
    evaluate(markdownBlockCode, {...runtime, rehypePlugins: [rehypePrism]})
      .then((code) => setSourceCode(code));
  }, [markdownBlockCode]);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const CodeBlock = sourceCode.default;

  return (
    <>
      <Box onClick={handleOpen}>
        {children}
      </Box>
      <SourceCodeDialog
        open={open}
        onClose={handleClose}
        Source={CodeBlock}
      />
    </>
  )
}