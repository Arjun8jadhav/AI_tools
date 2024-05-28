import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/context";
import { Navbar } from "../navbar/navbar";
const Code = () => {
    const {
        onSentc,
        recentPromptc,
        showResultsc,
        loadingc,
        resultDatac,
        setInputc,
        inputc,
    } = useContext(Context);

    const handleCardClick = (promptText) => {
        setInputc(promptText);
    };
    return (
        <section id="Code_gen">
        <Navbar/>
        <div className="main">
            
            <div className="main-container">
                {!showResultsc ? (
                    <>
                        <div className="greet">
                            <p>
                                <span>Hello , Dev </span>
                            </p>
                            <p>Happy Coding!!</p>
                        </div>
                        <div className="cards">
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick("Dijikstra Algorithm code to find shotest path ")
                                }
                            >
                                <p>Dijikstra Algorithm code to find shotest path </p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick(
                                        "Code for 0/1 Knapsack Algorithm Dynamic Programming"
                                    )
                                }
                            >
                                <p>Code for 0/1 Knapsack Algorithm Dynamic Programming </p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick("Depth First Search Algorithm Code")
                                }
                            >
                                <p>Depth First Search Algorithm Code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() => {
                                    handleCardClick(
                                        "Binary Search algorithm to find element in Sorted array code "
                                    );
                                }}
                            >
                                <p>Binary Search algorithm to find element in Sorted array code </p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <img className="result-img"src={assets.user} alt="" />
                            <p>{recentPromptc}</p>
                        </div>
                        <div className="result-data">
                            <img className="result-img" src={assets.gemini_icon} alt="" />
                            {loadingc ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultDatac }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => {
                                setInputc(e.target.value);
                            }}
                            value={inputc}
                            type="text"
                            placeholder="Enter the Prompt Here"
                        />
                        <div>
                            
                            <img
                                src={assets.send_icon}
                                alt=""
                                onClick={() => {
                                    onSentc();
                                }}
                            />
                        </div>
                    </div>
                    <div className="bottom-info">
                       
                     
                    </div>
                    
                </div>
            </div>
        </div>
        </section>
    );
};

export default Code;