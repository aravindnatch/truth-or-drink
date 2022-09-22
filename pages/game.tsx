import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import { useRouter } from "next/router";
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link';
import { useSwipeable } from 'react-swipeable';

import normal from '../bank/normal.json';
import party from '../bank/party.json';
import dirty from '../bank/dirty.json';
import dares from '../bank/dares.json';

const Game: NextPage = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0)
  const [questions, setQuestions] = useState([""])
  const [question, setQuestion] = useState("")
  const [stopScroll, setStopScroll] = useState(false);

  var mode = 'normal';
  var prearr: any = [];
  var gradient = ''

  if (router.query.mode) {
    mode = String(router.query.mode);
  }

  switch (mode) {
    case "party":
      gradient = 'bg-gradient-to-r from-[#FFC300] to-[#FF8900]';
      party.map((q: String) => {
        prearr.push(q);
      })
      break;
    case "dirty":
      gradient = 'bg-gradient-to-r from-[#FF006D] to-[#FC0023]';
      dirty.map((q: String) => {
        prearr.push(q);
      })
      break;
    case "dares": 
      gradient = 'bg-gradient-to-r from-[#EA00C3] to-[#BE00FF]';
      dares.map((q: any) => {
        prearr.push(q);
      })
      break;
    case "mix":
      gradient = 'bg-black';
      prearr = [...normal, ...party, ...dirty, ...dares];
      break;

    default: 
      gradient = 'bg-gradient-to-r from-[#00C5FF] to-[#009BFF]';
      normal.map((q: any) => {
        prearr.push(q);
      })
  }

  useEffect(() => {
    if(!router.isReady) return;

    const ind = parseInt(String(router.query.q))
    const offset = parseInt(String(router.query.offset))

    let currentIndex = prearr.length, randomIndex;
    var temp = "";
    
    if (ind < prearr.length) {
      temp = prearr[ind];
    }

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [prearr[currentIndex], prearr[randomIndex]] = [
        prearr[randomIndex], prearr[currentIndex]];
    }

    var newstart = 0;
    if (temp != "") {
      newstart = prearr.indexOf(temp);
    }

    if (!isNaN(offset)) {
      newstart = newstart - offset;
      if (newstart < 0) {
        newstart = prearr.length + newstart;
      }
    }
  
    setIndex(newstart);
    setQuestions(prearr);
    setQuestion(prearr[newstart]);
    document.getElementById('maindiv')!.focus();
  }, [router.isReady]);
  

  function getYear() {
    return new Date().getFullYear();
  }

  function nextQuestion() {
    if (index + 1 >= questions.length) {
      setQuestion(questions[0]);
      setIndex(0)
    } else {
      setQuestion(questions[index+1]); 
      setIndex(index + 1)
    }
  }

  function prevQuestion() {
    if (index - 1 < 0) {
      setQuestion(questions[questions.length - 1]);
      setIndex(questions.length - 1)
    } else {
      setQuestion(questions[index-1]);
      setIndex(index - 1)
    }
  }

  function handleKeyDown(e: any) {
    if (e.code === 'Space' || e.code == 'ArrowRight') {
      nextQuestion();
    } else if (e.code == 'ArrowLeft') {
      prevQuestion();
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => nextQuestion(),
    onSwipedRight: () => prevQuestion(),
    onSwipeStart: () => setStopScroll(true),
    onSwiped: () => setStopScroll(false)
  });

  return (
    <div className="h-full" tabIndex={0} id='maindiv' onKeyDown={handleKeyDown}>
      <Script strategy="afterInteractive" src="https://omni.aru.wtf/script.js" />
      <Head>
        <title>Truth or Drink</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixmobilevh flex flex-col">
        <Link href='/'> 
          <div className="cursor-pointer">
            <div className="select-none text-4xl text-header font-semibold mx-auto text-center align-middle pt-4 pb-2">
              TRUTH <span className="text-xl align-middle">O R</span> DRINK
            </div>
          
            <div className={[gradient, "select-none rounded-lg text-center text-white font-bold max-w-fit px-4 m-auto"].join(" ")}>
              {mode.toUpperCase().split('').join(' ')}
            </div>
          </div>
        </Link>
      
        <div className="flex flex-grow p-2 mx-auto mt-2 justify-center w-screen" {...handlers} style={{ touchAction: 'none' }}>
          <div 
            className="select-none flex items-center text-5xl text-white font-semibold bg-black rounded-xl shadow-xl p-4 max-w-3xl w-full justify-center text-center"
            onClick={nextQuestion}
          >
            {question}
          </div>
        </div>

        <footer className="flex flex-col text-center lg:text-left">
          <div className="select-none text-center text-gray-700 p-2 mb-2 text-opacity-60">
            © {getYear()} <a className="select-none font-semibold text-opacity-60" href="https://aravindnatch.me/">Aravind Natchiappan</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Game