import Campo from "../campo";
import Infos from "../informaçoes";

function Editor({code , setCode}) {
  return (
   <>
      <Campo code={code} setCode={setCode} />
      <Infos code={code} />
      
    </>
  );
}

export default Editor;
