import React from "react";
 

export default function Meme(){
  const [meme,setMeme] = React.useState({
    topText: "",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  })
  const [allMemes,setAllMemes] = React.useState([]);
   
  //fecting data from API ans store in state
  React.useEffect(()=>{
     fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data=> setAllMemes(data.data.memes))
  },[])



  function getMemeImage(){
    const randomIndex = Math.floor(Math.random()*allMemes.length);
     
    const url = allMemes[randomIndex].url;
    setMeme(prevMeme=>({
        ...prevMeme,
        randomImage:url
    }))
     

  }

  function handleChange(event){

    const {name,value} = event.target
    setMeme(prevMeme=>({
        ...prevMeme,
        [name] :value
    }))
  }

    return(
            <main>
                <div className="form">
                    <input 
                        className="form--input"
                        placeholder="Top Text"
                        type="text" 
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />

                    <input 
                        className="form--input"
                        placeholder="Bottom Text"
                        type="text"
                        name ="bottomText"
                        value ={meme.bottomText}
                        onChange={handleChange} 
                    />

                    <button
                    className="form--button"
                    onClick={getMemeImage}
                    >

                    Get a new meme image
                    </button>
                </div>

                <div className="meme">
                    <img src={meme.randomImage}  className="meme--image" alt="hey"/>
                    <h2 className="meme--text top"> {meme.topText}</h2>
                    <h2 className="meme--text bottom"> {meme.bottomText}</h2>
                </div>
            </main>

            
    );
}