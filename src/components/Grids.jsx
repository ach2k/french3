import * as React from 'react';

import "./grids.css"

const Grids = () => {
  return (
    <>
      <div className="grid">
      <a href="/"><div className="boxx box1"><span className='lessonsgrid'>LESSONS</span></div>  
      </a>

      <a href="/">
        <div className="boxx box2"><span className='exgrid'>EXERCICES</span></div>
        </a>

        <a href="/">
      <div className="boxx box3"><span className='dictionarygrid'>DICTIONARY</span></div>
      </a>
      {/* <a href="/">
      <div className="boxx box4"><span className='exgrid'>TIKTOK CHANNEL?</span></div>
      </a>
      <a href="/">
      <div className="boxx box5"><span>LEARN NEW WORDS (DICTIONARY)</span></div>
      </a>
      <a href="/">
      <div className="boxx box6"><span>YOUTUBE CHANNEL</span></div>
      </a> */}
      </div>
    </>
  )
}

export default Grids