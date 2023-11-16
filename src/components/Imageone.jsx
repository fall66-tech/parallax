import { Parallax } from 'react-parallax';
import nasa from '../img/nasa.jpg'

const Imageone = () => (
    <Parallax className=' relative h-screen' bgImage={nasa}  strength={400}>
      <div className=" flex items-center justify-center absolute h-screen w-full">
        <span className=" bg-slate-600 uppercase text-white p-4 text-base tracking-[.625em]">Explore the space</span>
      </div>
    </Parallax>
);

export default Imageone;

// blur={10}