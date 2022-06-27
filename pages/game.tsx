import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import { useRouter } from "next/router";
import Head from 'next/head'
import Link from 'next/link';

import normal from '../bank/normal.json';
import party from '../bank/party.json';
import dirty from '../bank/dirty.json';
import dares from '../bank/dares.json';

const Game: NextPage = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0)
  const [questions, setQuestions] = useState([""])
  const [question, setQuestion] = useState("")

  var mode = 'normal';
  var prearr: any = [];
  var gradient = ''

  useEffect(() => {
    if(!router.isReady) return;
  }, [router.isReady])

  if (router.query.mode) {
    mode = String(router.query.mode);
  }

  switch (mode) {
    case "party":
      gradient = 'bg-gradient-to-r from-[#FFC300] to-[#FF8900]';
      prearr = party;
      break;
    case "dirty":
      gradient = 'bg-gradient-to-r from-[#FF006D] to-[#FC0023]';
      prearr = dirty;
      break;
    case "dares": 
      gradient = 'bg-gradient-to-r from-[#EA00C3] to-[#BE00FF]';
      prearr = dares;
      break;
    case "mix":
      gradient = 'bg-black';
      prearr = [...normal, ...party, ...dirty, ...dares];
      break;

    default: 
      gradient = 'bg-gradient-to-r from-[#00C5FF] to-[#009BFF]';
      prearr = normal;
  }

  useEffect(() => {
    let currentIndex = prearr.length,  randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [prearr[currentIndex], prearr[randomIndex]] = [
        prearr[randomIndex], prearr[currentIndex]];
    }

    setQuestions(prearr);
    setQuestion(prearr[0]);
  }, []);

  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <div>
      <Head>
        <title>Truth or Drink</title>
        <link rel="icon" href="/favicon.ico" />
        <script defer data-domain="tod.aru.wtf" src="https://analytics.aru.wtf/js/script.js"></script>
        <script defer src="https://omni.aru.wtf/script.js"></script>
      </Head>
      <div className="h-screen fixmobilevh flex flex-col">
        
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
      

        <div className="flex flex-grow p-2 mx-auto mt-2">
          <div 
            className="select-none flex items-center text-5xl text-white text-header font-semibold text-center bg-black rounded-xl shadow-xl p-4 max-w-xl"
            onClick={() => {
              if (index + 1 >= questions.length) {
                setQuestion(questions[0]);
                setIndex(0)
              } else {
                setQuestion(questions[index+1]); 
                setIndex(index + 1)
              }
            }}           
          >
            {question}
          </div>
        </div>

        <footer className="flex flex-col text-center lg:text-left">
          <div className="select-none text-center text-gray-700 p-2 mb-2 text-opacity-60">
            © {getYear()} <a className="select-none font-semibold text-opacity-60" href="https://aru.wtf/">Aravind Natchiappan</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Game