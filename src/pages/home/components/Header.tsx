import { FunctionComponent } from "react";
import AnimatedText from "./UI/AnimatedText";

const Header: FunctionComponent = () => {
    return (
        <header className="align-items-center m-auto flex h-56 max-w-screen-2xl flex-col justify-evenly py-10 ">
            <AnimatedText>Frontend Mentor Solution Repository</AnimatedText>
            <div className="m-auto h-1 w-32 rounded-sm bg-sky-200"></div>
            <div className="max-w-4xlr m-auto text-center font-rubik text-white">
                <p>
                    This site acts as a repository to demo my solutions to
                    various{" "}
                    <a
                        href="https://www.frontendmentor.io/"
                        target="_blank"
                        className="italic hover:text-fuchsia-600"
                    >
                        frontend mentor
                    </a>{" "}
                    challenges.
                </p>
                <p>
                    The source code for all of these can be found on my{" "}
                    <a
                        href="https://github.com/JamieKennedy"
                        target="_blank"
                        className="italic hover:text-fuchsia-600"
                    >
                        GitHub.
                    </a>
                </p>
            </div>
        </header>
    );
};

export default Header;
