
import './App.css';
import { NextUIProvider } from "@nextui-org/react";
import Routes from "./routes/routes";
import NavbarComponent from './components/NavbarComponent';

function App() {

  return (
    <NextUIProvider>
    <div className="flex flex-col min-h-screen">

      <div className="bg-black text-white py-4 px-8">
        <NavbarComponent/>
      </div>
      <div className="flex justify-center min-h-screen bg-gradient-to-br from-[#BEE2AD] to-[#FFE0B1]">
        <Routes />
      </div>
    </div>
    </NextUIProvider>
  );
}

export default App;