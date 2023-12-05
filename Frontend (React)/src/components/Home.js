import React, { useState } from "react";
import { Image, Button } from "@nextui-org/react";
const Home = () => {
    return (
        <div className="items-center justify-center">

        <div className="text-center text-2xl font-bold py-4 px-8">
        <h2 className="">Selamat Datang</h2>
        </div>
        <Image width={200}
        src="/logo.png"/>
        </div>
    )
};

export default Home;
