import { Parallax } from 'react-parallax';
import earth from '../img/earth.jpg'

const Imagetwo = () => (
    <Parallax className=' relative h-screen' bgImage={earth}  strength={400}>
      <div className=" flex items-center justify-center absolute h-screen w-full">
        <span className=" bg-slate-600 uppercase text-white p-4 text-base tracking-[.625em]">Explore the space</span>
      </div>
    </Parallax>
);

export default Imagetwo;
