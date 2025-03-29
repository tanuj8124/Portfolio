import { useState } from 'react';
import './App.css';
import Program from './components/Program';
import Clock from './components/Clock';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { MdComputer } from "react-icons/md";

function App() {
  let [start, SetStart] = useState(false);
  let [drc, Setdrc] = useState(false);
  let [sticker, SetSticker] = useState(true);
  let [pc, setPc] = useState(false)
  let [achivements, setAchi] = useState(true)
  let [certificates, setCerti] = useState(false)

  function StartClick() {
    SetStart(!start);
  }

  return (
    <div className="bg-[url(background.jpeg)] bg-no-repeat bg-cover flex justify-center items-center bg-black min-h-screen relative">

      {/* CRT Frame */}
      <img className="rounded-t-2xl shadow absolute h-full w- object-cover z-0" src="frome.jpg" alt="CRT Frame" />

      {sticker && (
        <div className='absolute top-3 right-40 z-50' onClick={() => SetSticker(false)}>
          <img className='h-80 cursor-pointer' src="sticker.png" alt="Sticker" />
        </div>
      )}

      <div className='relative w-[85%] max-w-[900px] h-[90%] flex flex-col items-center z-10'>
        {/* Screen */}
        <div className='relative mb-18 h-full flex flex-col items-center shadow-inner '>
          <img className='w-190 h-135 object-cover rounded-2xl' src="wallpaper.jpg" alt="Wallpaper" />

          {/* Desktop Icons */}
          <div className='absolute top-10 left-4 space-y-6 '>
            <div className='hover:bg-blue-200 p-2 hover:border-1 z-0'>

              <a href="https://drive.google.com/file/d/1eSoQG4CtTqGeH4EY7ld2K4P1xwPVSLW5/view?usp=sharing" className='icon'>
                <img className='w-12 ' src="doc.png" alt="Resume" />
                <h3 className='text-white text-center text-sm'>Resume</h3>
              </a>
            </div>
            <div className='icon hover:bg-blue-200 p-2 hover:border-1 z-0' onClick={() => Setdrc(true)}>
              <img className='w-12' src="drcrop.webp" alt="Dr. Crop" />
              <h3 className='text-white text-center text-sm'>Dr. Crop</h3>
            </div>

            <div className='hover:bg-blue-200 p-2 hover:border-1 z-0'>

              <a href="https://www.bhujal.tech/" className='icon'>
                <img className='w-12' src="bhujal.png" alt="Bhujal" />
                <h3 className='text-white text-center text-sm'>Bhujal</h3>
              </a>
            </div>
            <div className='hover:bg-blue-200 p-2 hover:border-1 z-0'>

              <button className='icon pc' onClick={() => { setPc(true) }}>
                <img className='w-12' src="pc.png" alt="PC" />
                <h3 className='text-white text-center text-sm'>PC</h3>
              </button>
            </div>
          </div>
          {/* pc */}
          {pc && (<div className='absolute inset-10 bg-gray-800 border-2 border-black w-[90%] h-[80%] flex flex-col'>
            <div className='flex justify-between bg-white p-2 border-b-2 border-black'>
              <span className='text-black font-bold'>My Files</span>
              <button className='bg-red-600 text-white px-2' onClick={() => setPc(false)}>X</button>

            </div>
            <div className=' border-2 border-t-0  bg-gray-200 '> File Edit View Help
              <div className='w-full h-85 bg-white border-1 border-gray-200 '>
                <div className='grid  grid-cols-2'>
                  <div className='col-span-1 grid-rows-4 gap-6 grid grid-cols-3 justify-center items-center'>
                    <div onClick={() => { setAchi(true); setCerti(false) }} className='felx ml-2 justify-center items-center hover:bg-blue-200 hover:border-2 hover:border-blue:900'>
                      <img className=' h-20' src="folder.png" alt="" /> achivements

                    </div>
                    <div className='hover:bg-blue-200 hover:border-2 hover:border-blue:900 ' onClick={() => { setAchi(false); setCerti(true) }}>
                      <img className='ml-2 h-20' src="folder.png" alt="" />
                      <h2 className='flex justify-center items-center'>certificates
                      </h2>

                    </div>
                  </div>
                  {certificates && (
                    <div className='col-span-1  border-1 bg-white h-85'>
                    <iframe
                      src="https://drive.google.com/embeddedfolderview?id=1ZUXOuPkhQgm-wT8a-Quh7Ta0XFa99ZgJ#grid"
                      className="w-full h-full"
                    > </iframe>
                  </div>
                  )}
                  
                  {achivements && (<div className='col-span-1  border-1 bg-white h-85'>
                    <div className='w-full p-2 flex justify-center items-center'>

                      <h2 className='text-xl' >Acchivements</h2>
                    </div>
                    <div className='ml-11 mt-2'>

                      <ul className='list-disc'>
                        <li>Top 5 :Samsung Solve For Tomorrow</li>
                        <li>1st : Smart India Hackathon</li>
                        <li>2nd : Accenture Innovation challenge</li>
                        <li>2nd : Xapspark challenge</li>
                      </ul>
                    </div>


                  </div>)}

                </div>

              </div>
              <div className='w-full h-5'>

              </div>
            </div>

          </div>)}


          {/* Dr. Crop Browser Window */}
          {drc && (
            <div className='absolute inset-10 bg-gray-800 border-2 border-black w-[90%] h-[80%] flex flex-col'>
              <div className='flex justify-between bg-white p-2 border-b-2 border-black'>
                <span className='text-black font-bold'>Browser</span>
                <button className='bg-red-600 text-white px-2' onClick={() => Setdrc(false)}>X</button>
              </div>
              <iframe className='flex-grow' src="https://dr-crop-tanuj8124s-projects.vercel.app/" title='Dr. Crop'></iframe>
            </div>
          )}

          {/* Start Menu */}
          {start && (
            <div className='absolute bottom-13 left-0 bg-gray-400 border border-black w-64 p-2 z-50'>
              <h3 className='border-b pb-2'>Project Files</h3>
              <div className='space-y-2'>
                <Program ProjectName="Dr.Crop" Link='https://github.com/tanuj8124/Dr.Crop' />
                <Program ProjectName="Bhujal" Link='https://github.com/mondalsurojit/bhujal' />
                <Program ProjectName="Punjab Rojgar" Link='https://github.com/tanuj8124/PGRKAM_24' />
                <Program ProjectName="Curios.ai" Link='https://github.com/tanuj8124/curious-ai' />
                <Program ProjectName="GGV Mitra" Link='https://github.com/tanuj8124/ggvmitra' />
              </div>
              <div className='flex justify-between pt-4'>
                <a href="https://www.linkedin.com/in/tanuj-kashyap-716b2a207/">
                  <FaLinkedin className='text-blue-600 w-6 h-6' />
                </a>
                <a href="mailto:tanujkashyap8124@gmail.com">
                  <MdEmail className='text-black w-6 h-6' />
                </a>
              </div>
            </div>
          )}

          {/* Taskbar */}
          <div className='absolute bottom-0 w-full flex items-center justify-between shadow-inner bg-gray-300 rounded-b-2xl'>
            <button className='w-25 flex items-center border-t-white border-2 rounded-bl-2xl border-l-white hover:border-t-black hover:border-l-black hover:border-r-white hover:border-b-white bg-gray-400' onClick={StartClick}>
              <img className='h-12 rounded-4xl' src="start.png" alt="Start Button" /> start
            </button>
            <Clock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;