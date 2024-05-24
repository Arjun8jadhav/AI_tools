import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
	const [input, setInput] = useState("");
	const [recentPrompt, setRecentPrompt] = useState("");
	const [prevPrompts, setPrevPrompts] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [loading, setLoading] = useState(false);
	const [resultData, setResultData] = useState("");
	//for code
	const [inputc, setInputc] = useState("");
	const [recentPromptc, setRecentPromptc] = useState("");
	const [prevPromptsc, setPrevPromptsc] = useState([]);
	const [showResultsc, setShowResultsc] = useState(false);
	const [loadingc, setLoadingc] = useState(false);
	const [resultDatac, setResultDatac] = useState("");
	//for navbar
	const [navpr,setNavpr]=useState(true);
	const [navco,setNavco]=useState(false);
	const [navimg,setNavimg]=useState(false);

	const delayPara = (index, nextWord) => {
		setTimeout(function () {
			setResultData((prev) => prev + nextWord);
		}, 10 * index);
	};
	const newChat = () => {
		setLoading(false);
		setShowResults(false)
	}

	const onSent = async (prompt) => {
		setResultData("");
		setLoading(true);
		setShowResults(true);
		let response;
		if (prompt !== undefined) {
			response = await run(prompt);
			setRecentPrompt(prompt)
		} else {
			setPrevPrompts(prev => [...prev, input]);
			setRecentPrompt(input);
			response = await run(input);
		}

		try {


			let responseArray = response.split("**");
            let newResponse = "";
			for (let i = 0; i < responseArray.length; i++) {
				if (i === 0 || i % 2 !== 1) {
					newResponse += responseArray[i];
				} else {
					newResponse += "<b>" + responseArray[i] + "</b>";
				}
			}
			let newResponse2 = newResponse.split("*").join("<br/>");
			
			let newResponseArray = newResponse2.split("");
			for (let i = 0; i < newResponseArray.length; i++) {
				const nextWord = newResponseArray[i];
				delayPara(i, nextWord + "");
			}
		} catch (error) {
			console.error("Error while running chat:", error);
			// Handle error appropriately
		} finally {
			setLoading(false);
			setInput("");
		}
	};
	const delayParac = (index, nextWord) => {
		setTimeout(function () {
			setResultDatac((prev) => prev + nextWord );
		}, 10 * index);
	};
	const newChatc = () => {
		setLoadingc(false);
		setShowResultsc(false)
	}

	const onSentc = async (prompt) => {
		setResultDatac("");
		setLoadingc(true);
		setShowResultsc(true);
		let response;
		if (prompt !== undefined) {
			response = await run(prompt);
			setRecentPromptc(prompt)
		} else {
			setPrevPromptsc(prev => [...prev, inputc]);
			setRecentPromptc(inputc);
			response = await run(inputc);
		}

		try {


			//let newResponseArray = response.split('/n').join('');
			
			let newResponseArray = response.split('\n');
			console.log(newResponseArray.length)
			
			for (let i = 0; i < newResponseArray.length; i++) {
				const nextWord = newResponseArray[i];
				console.log(nextWord)
				delayParac(i, nextWord + '<br>');
			}
		} catch (error) {
			console.error("Error while running chat:", error);
			// Handle error appropriately
		} finally {
			setLoadingc(false);
			setInputc("");
		}
	};

	const contextValue = {
		prevPrompts,
		setPrevPrompts,
		onSent,
		setRecentPrompt,
		recentPrompt,
		input,
		setInput,
		showResults,
		loading,
		resultData,
		newChat,
		prevPromptsc,
		setPrevPromptsc,
		onSentc,
		setRecentPromptc,
		recentPromptc,
		inputc,
		setInputc,
		showResultsc,
		loadingc,
		resultDatac,
		newChatc,
		navpr,
		setNavpr,
		navco,
		setNavco,
		navimg,
		setNavimg
	};

	return (
		<Context.Provider value={contextValue}>{props.children}</Context.Provider>
	);
};

export default ContextProvider;