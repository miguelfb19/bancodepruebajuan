import { useState } from 'react';
import SlDrawer from '@shoelace-style/shoelace/dist/react/drawer/index.js';
import { CustomButton } from './CustomButton';

export const Drawer = () => {
   const [open, setOpen] = useState(false);

   const size = window.innerWidth < 600 ? "100vw" : "60vw"
  return (
    <>
      <SlDrawer className='relative' label="Drawer" open={open} onSlAfterHide={() => setOpen(false)} style={{["--size" as any]: size}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        {/* <SlButton slot="footer" variant="default" onClick={() => setOpen(false)}>
          Close
        </SlButton> */}
      <CustomButton text='Cerrar' action={() => setOpen(false)} className='absolute bottom-10 right-10'/>  
      </SlDrawer>

      
      <CustomButton text='Abrir modal' action={() => setOpen(true)} className='ml-5'/>
    </>
  )
}
