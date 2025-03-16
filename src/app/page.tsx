'use client';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LatLngTuple } from 'leaflet';

const page = () => {
  // const [showScrollButton, setShowScrollButton] = useState(false);
  // const [lastScrollY, setLastScrollY] = useState(0);

  const position: LatLngTuple = [51.505, -0.09]
  return (
    // <div>
    //   <button onClick={switchTheme} className="bg-red-500 p-2">
    //     Switch theme
    //   </button>
    //   <div className="text-skin-base bg-skin-base text-2xl">
    //     hff
    //   </div>
    //   <div>
    //     {
    //       Array.from({ length: 4 }).map((_, index) => (
    //         <div key={index} className="h-[100vh] flex items-center justify-center bg-gray-800 mb-24">
    //           <h1 className="text-4xl font-bold text-white">Scroll Down</h1>
    //         </div>
    //       ))
    //     }
    //   </div>
    //   <div
    //   className={`shine !fixed bottom-0 left-0 z-30 flex w-full gap-5 xl:hidden transition-all duration-300 ${
    //     showScrollButton
    //       ? "translate-y-0 opacity-100"
    //       : "translate-y-10 opacity-0"
    //   }`}
    // >
    //   <a
    //     href="https://api.whatsapp.com/send/?phone=971509276515&text=Hi%2C+I+am+Interested+to+Invest+in+a+Property+in+Dubai%2C+https%3A%2F%2Finvest-real-estate-dubai.com%2F&type=phone_number&app_absent=0"
    //     target="_blank"
    //     className="bg-[#20b859] p-2.5 w-full flex items-center justify-center gap-2"
    //   >
    //     <span className="text-white font-medium">Whatsapp</span>
    //   </a>
    // </div>
    // </div>
    // <AccordionScroll />
    // <RichTextEditor />
   <div className='flex items-center justify-center h-screen'>
     <MapContainer center={position} zoom={20} scrollWheelZoom={false} style={{ height: '1000px', width: '1000px' }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
   </div>
  );
};

export default page;
