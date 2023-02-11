import "./home.css";

import React from "react";

const Home = () => {
    return (
        <div className="min-h-screen w-full bg-slate-900 ">
            <section className="align-items-center m-auto flex h-48 max-w-screen-2xl flex-col justify-evenly py-10 ">
                <h1 className="text-center text-4xl text-sky-100">
                    Frontend Mentor Solution Repository
                </h1>
                <div className="m-auto h-1 w-32 rounded-sm bg-sky-200"></div>
            </section>
            <section className="h-screen w-full "></section>
        </div>
    );
};

export default Home;
