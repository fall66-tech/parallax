import { Parallax } from 'react-parallax';
import univ from '../img/univ.jpg'

const Imagethree = () => (
    <Parallax className=' relative h-screen' bgImage={univ}  strength={400}>
      <div className=" flex items-center justify-center absolute h-screen w-full">
        <span className=" bg-slate-600 uppercase text-white p-4 text-base tracking-[.625em]">Explore the space</span>
      </div>
    </Parallax>
);

export default Imagethree;
