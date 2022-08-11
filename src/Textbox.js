import React, { useState,useEffect} from 'react'


export default function Textbox(props) {

    
    const [text, settext] = useState(()=>{

        const saved = localStorage.getItem("text");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
        


    });
    

    useEffect(() => {
        
        localStorage.setItem("text", JSON.stringify(text));
      }, [text]);


    
    const handleonchange = (event)=>{

        settext(event.target.value);

    }
        
    const touppercase = () =>{
        let text1 = text 
        
        let tmp = text.toUpperCase();

        if(tmp===text1){
            props.showalert("Text is already uppercased","primary");
        }

        else if(text.length){
            settext(text.toUpperCase());
            props.showalert("converted to uppercase","success");
        }

        else{
            props.showalert("your text arena is empty","warning");
        }
        
    }
    const tolowercase = () =>{
        let text1 = text;
        let tmp = text.toLowerCase();

        if(tmp===text1){
            props.showalert("Text is already lowercased","primary");
        }

        else if(text.length){
            settext(text.toLowerCase());
            props.showalert("converted to lowercase","success");
        }

        else{
            props.showalert("your text arena is empty","warning");
        }
        
    }
    
    
    const countwords =()=>{

        let total =0,cnt=0;
        for(let i=0;i<text.length;i++){

            if(text.charAt(i)!==' ' && text.charAt(i)!=='\n') cnt++;

            else{
                if(cnt>0) total++;

                cnt=0;
            }
        }

        if(cnt>0) total++;

        return total;
    }

    const countchar = ()=>{
        let cnt=0;
        for(let i=0;i<text.length;i++){
            if(text.charAt(i)!==' ' && text.charAt(i)!=='\n') cnt++;
        }

        return cnt;

    }

    const Sentencecase=()=>{
        
        if(text.length){
            let tmp = text.charAt(0).toUpperCase();

            for(let i=1;i<text.length;i++){
                tmp+= text.charAt(i).toLowerCase();
            }

            if(tmp===text){
                props.showalert("Text is already sentencecased","primary");
            }
            else if(tmp.length){
                settext(tmp); 
                props.showalert("your text is now sentence cased","success");
            }

            else{
                props.showalert("your text arena is empty","warning");
            }
            



        }

    }

    const RemoveExtraspaces=()=>{

        
        if(!text.length){
            props.showalert("your text arena is empty","primary");
        }

        else{

            let newtext = text.trim().split(/ +/).join(' ');

            if(text===newtext){
                props.showalert("There is no extra space","primary");
            }

            else{
                settext(newtext);

                props.showalert("Extraspaces removed","success");
            }
            
        }

    }

    const copytext=()=>{

        navigator.clipboard.writeText(text);
        props.showalert("text coppied","success");
    }

    const cleartext=()=>{

        settext('');
        props.showalert("text cleared","success");
    }

    const altercase=()=>{
         
        
        if(!text.length){
            props.showalert("your text arena is empty","primary");
        }

        else{
            let tmp = text.charAt(0);
            for(let i=1;i<text.length;i++){

                let prev = tmp.charAt(i-1);

                if(prev.toUpperCase()===tmp.charAt(i-1)){
                    tmp+=text.charAt(i).toLowerCase();
                }

                else{
                    tmp+=text.charAt(i).toUpperCase();
                }


            }
        
            if(tmp===text){
                props.showalert("Your text is already altered","primary");
            }
            else{
                settext(tmp);
                props.showalert("Your textcase is altered","success");
            }
            
        }
            
        

    }

    const downloadTxtFile = () => {
        
            if(text.length>0){

                const element = document.createElement("a");
                const file = new Blob([document.getElementById('root').value], {type: 'text/plain'});
                element.href = URL.createObjectURL(file);
                element.download = "myFile.txt";
                document.body.appendChild(element); // Required for this to work in FireFox
                element.click();

                props.showalert("your textfile downloaded ","success");
            }

           else{
            props.showalert("Can't download empty file","danger");
           }
          
      }
    
    return (
    <>
    <div>

        <div className='container'>

            <div className="my-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Create Your text below</strong></label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleonchange}></textarea>
            </div>

            <button type="button" className="btn btn-primary mx-2 my-2" onClick={touppercase}>Convert uppercase</button>
            <button type="button" className="btn btn-primary mx-2 my-2"  onClick={tolowercase}>Convert lowercase</button>
            <button type="button" className="btn btn-primary mx-2 my-2"  onClick={Sentencecase}>Sentence Case</button>
            <button type="button" className="btn btn-primary mx-2 my-2"  onClick={RemoveExtraspaces}>Remove Extraspaces</button>
            <button type="button" className="btn btn-primary mx-2 my-2"  onClick={copytext}>Copy text</button>
            <button type="button" className="btn btn-primary mx-2 my-2"  onClick={cleartext}>Clear text</button>
            <button type="button" className="btn btn-primary mx-2 my-2"  onClick={altercase}>Alter Case</button>
            <button type="button" className="btn btn-primary mx-2 my-2"  onClick={downloadTxtFile}>Download</button>
            
        </div>
        
        <div className='container my-2'>

            <p>{countwords()} words and {countchar()} characters</p>
            <p>{countchar()*0.0083} minutes to read</p>
        </div>

        <div className='container my-2'>
            <h2>Preview</h2>
            <p>{text.length ? text : "Write above to preview"}</p>
           
        </div>


        
    </div>
    </>

    
  )
}
