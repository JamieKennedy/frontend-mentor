import "./home.css";

import AnimatedText from "./components/AnimatedText";
import React from "react";

const Home = () => {
    return (
        <div className="min-h-screen w-full bg-slate-900 ">
            <section className="align-items-center m-auto flex h-48 max-w-screen-2xl flex-col justify-evenly py-10 ">
                <AnimatedText>Frontend Mentor Solution Repository</AnimatedText>
                <div className="m-auto h-1 w-32 rounded-sm bg-sky-200"></div>
            </section>
            <section className="h-screen w-full "></section>
        </div>
    );
};

export default Home;
