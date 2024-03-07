import React from "react";
// import memesData from "../memesData";

export default function Meme() {
  //const [memeImage, setMemeImage] = React.useState('http://i.imgflip.com/1bij.jpg')

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  // React.useEffect(() => {
  //     fetch("https://api.imgflip.com/get_memes")
  //         .then(res => res.json())
  //         .then(data => setAllMemes(data.data.memes))
  // }, [])

  /**
     useEffect takes a function as its parameter. If that function
     returns something, it needs to be a cleanup function. Otherwise,
     it should return nothing. If we make it an async function, it
     automatically retuns a promise instead of a function or nothing.
     Therefore, if you want to use async operations inside of useEffect,
     you need to define the function separately inside of the callback
     function, as seen below:
     */

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  console.log(allMemes);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);

    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
    //console.log(url);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <div>
          <label>
            Top Text
            <input
              type="text"
              placeholder="Top text"
              className="form--input"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Bottom Text
            <input
              type="text"
              placeholder="Bottom text"
              className="form--input"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </label>
        </div>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );

  // return (
  //
  //     <main>
  //         <div className='form'>
  //             <div>
  //                 <label className="form--label">Top text</label>
  //                 <input type='text' className={'form--input'} placeholder='Shut up'/>
  //             </div>
  //             <div>
  //                 <label className="form--label">Bottom text</label>
  //                 <input type='text' className={'form--input'} placeholder='and give me money.'/>
  //             </div>
  //
  //             <button className='form--button' onClick={getMemeImage}>Get a new meme image!</button>
  //
  //         </div>
  //
  //
  //         <img src={meme.randomImage} className='meme--image' />
  //
  //     </main>
  //
  //
  // )
}
