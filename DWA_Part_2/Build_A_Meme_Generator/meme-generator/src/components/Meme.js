import React from 'react';
import memesData from "../memesData";



export default function Meme(){

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        console.log(url);
    }

    return (

        <main>
            <div className='form'>
                <div>
                    <label className="form--label">Top text</label>
                    <input type='text' className={'form--input'} placeholder='Shut up'/>
                </div>
                <div>
                    <label className="form--label">Bottom text</label>
                    <input type='text' className={'form--input'} placeholder='and give me money.'/>
                </div>

                <button className='form--button' onClick={getMemeImage}>Get a new meme image!</button>

            </div>
        </main>


    )
}