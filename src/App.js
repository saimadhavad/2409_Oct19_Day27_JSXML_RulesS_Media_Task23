import logo from './logo.svg';
import './App.css';
import syeraaImage from './images/syeraa_2.webp';
import syeraaAudio from './audios/Swaasalona Desame.mp3';
import syeraaVideo from './videos/Sye Raa - Movie Promo_ 2.mp4';

function App() {
  return (
    <div className="App">
      {/* IMAGES */}
     <div>
        <h1>JSXML-RULES-MEDIA</h1>
        <h1>Sye Raa Narasimha Reddy</h1>
        <h2>Images</h2>

        <div className="images">
        <fieldset>
          <legend>
          image URL(INTERNET)
          </legend>
          <img src="https://services.brninfotech.com/tws/media2/posters/Sye Raa Narasimha Reddy.jpg">
          
        </img>
        <p>Sye Raa Narasimha Reddy Poster-1</p>
        </fieldset>
        <fieldset>
          <legend>
            public image(LOCAL)
          </legend>
          <img src="./images/syeraa_1.webp">
          
        </img>
        <p>Sye Raa Narasimha Reddy Poster-2</p>
        </fieldset>
        <fieldset>
          <legend>
            src image (IMPORT)
          </legend>
          <img src={syeraaImage}>
          
        </img>
        <p>Sye Raa Narasimha Reddy Poster-3</p>
        </fieldset>
      </div>
     </div>
     <hr></hr>
     {/* AUDIO */}
     <div>
     <h2>AUDIO</h2>
     <div className="audio">
            <fieldset>
              <legend>
                audio URL(INTERNET)
              </legend>
              <audio src="https://services.brninfotech.com/tws/media2/songs/SyeRaa/01 - Sye Raa.mp3" controls></audio>
              <p>Sye Raa.mp3</p>
            </fieldset> 
            <fieldset>
              <legend>
                public audio(LOCAL)
              </legend>
              <audio src="./audios/Jaago Narasimhaa Jaagore.mp3" controls></audio>
              <p>Jaago Narasimhaa Jaagore.mp3</p>
            </fieldset>
            <fieldset>
              <legend>
                src audio (IMPORT)
              </legend>
              <audio src={syeraaAudio} controls></audio>
              <p>Swaasalona Desame.mp3</p>
            </fieldset>
         </div>
     </div>
     <hr></hr>
     {/* VEDIO */}
     <div>
      <h2>VIDEO</h2>
      <div className="video"> 
      <fieldset>
              <legend>
                vedio URL(INTERNET)
              </legend>
              <video src="https://services.brninfotech.com/tws/media2/trailers/Sye Raa.mp4" controls autoPlay muted>
               </video>
               <p>Sye Raa Trailer</p>
            </fieldset> 
            <fieldset>
              <legend>
                public vedio(LOCAL)
              </legend>
              <video src="./videos/Sye Raa - Movie Promo_1.mp4" controls></video>
              <p>Sye Raa Narasimha Reddy Movie Promo 1</p>
            </fieldset>
            <fieldset>
              <legend>
                src vedio (IMPORT)
              </legend>
              <video src={syeraaVideo} controls></video>
              <p>
              Sye Raa Narasimha Reddy Movie Promo 2
              </p>
            </fieldset>
      </div>
     </div>
    </div> 
  );
}

export default App;
