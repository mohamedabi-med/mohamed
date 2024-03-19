import React from 'react';

const backgroundStyles3 = {
  backgroundImage: 'url(learnen.jpg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  opacity: '40%', // Remove the semicolon at the end of this line
  backgroundColor: 'bg-base-200',
};


const Learnen = () => {
  return (
    <div className="container text-center mb-3 mx-auto px-4 py-8 mb-5">
      <h1 className="text-5xl font-bold translate-y-[8px] ">Explore New Journey in Website Developement!</h1> 
      <div className="grid grid-cols-1 gap-4 mb-5 ">
          <div className="mockup-browser border bg-base-300 w-full">
            <div className="mockup-browser-toolbar">
              <div className="input">https://worldwebsolutions.com</div>
            </div>
            <div className=" text-black flex justify-center items-center px-4 py-16  antialiased font-black  h-[100vh]  text-center text-5xl   rounded-lg   place-content-center" style={backgroundStyles3}><p>Learn How To Build the best Websites Ever!<br></br>  Became a Full Stack Developer  <br></br> and get Your First Client  </p> </div>
          </div>
      </div>
      <h1 className='text-center text-sm ' > Learn  How to Write Code And Logique <br></br> 
      How To fix things  <br></br>  And How  to be an  Excellent Problem Solver !</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <div>
          <div className="mockup-code">
            <pre data-prefix="1" className="text-sm font-mono"><code>Learn How to fix The erreurs</code></pre> 
            <pre data-prefix="1" className="text-sm font-mono"><code>npm i  Website Developement From Worldweb Solutions</code></pre> 
            <pre data-prefix="2" className="text-sm font-mono"><code>installing...</code></pre> 
            <pre data-prefix="3" className="text-sm font-mono bg-warning text-warning-content"><code>Error! </code></pre>
          </div>
        </div>
        <div>
          <div className="mockup-code">
            <pre data-prefix="$" className="text-sm font-mono"><code>npm i Website Developement </code></pre> 
            <pre data-prefix=">" className="text-sm font-mono text-warning"><code>installing...</code></pre> 
            <pre data-prefix=">" className="text-sm font-mono text-success"><code>Done! (No More Erreurs)</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learnen;
