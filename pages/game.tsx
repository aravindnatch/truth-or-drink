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
  var gradient = ''
  var bank = 0

  useEffect(() => {
    if(!router.isReady) return;
  }, [router.isReady])

  if (router.query.mode) {
    mode = String(router.query.mode);
  }

  switch (mode) {
    case "party":
      gradient = 'bg-gradient-to-r from-[#FFC300] to-[#FF8900]';
      bank = 1;
      break;
    case "dirty":
      gradient = 'bg-gradient-to-r from-[#FF006D] to-[#FC0023]';
      bank = 2;
      break;
    case "dares": 
      gradient = 'bg-gradient-to-r from-[#EA00C3] to-[#BE00FF]';
      bank = 3;
      break;
    case "mix":
      gradient = 'bg-black';
      bank = 4;
      break;

    default: 
      gradient = 'bg-gradient-to-r from-[#00C5FF] to-[#009BFF]';
  }

  useEffect(() => {
    const questions: any = [];
    const mix = [...normal, ...party, ...dirty, ...dares];

    questions.push(normal);
    questions.push(party);
    questions.push(dirty);
    questions.push(dares);
    questions.push(mix);
  
    let currentIndex = questions[bank].length,  randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [questions[bank][currentIndex], questions[bank][randomIndex]] = [
        questions[bank][randomIndex], questions[bank][currentIndex]];
    }

    setQuestions(questions[bank]);
    setQuestion(questions[bank][0]);
  }, []);

  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <div>
      <Head>
        <title>Truth or Drink</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen">
        
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
      

        <div className="p-4 flex flex-grow mx-auto">
          <div 
            className="select-none flex items-center justify-center text-5xl text-white text-header font-semibold text-center bg-black rounded-xl shadow-xl p-4 max-w-xl"
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

        <div 
          onClick={() => {
            if (index + 1 >= questions.length) {
              setQuestion(questions[0]);
              setIndex(0)
            } else {
              setQuestion(questions[index+1]); 
              setIndex(index + 1)
            }
          }}
          className="select-none flex items-center justify-center text-3xl font-bold text-center rounded-xl mx-20 mb-8 py-4 cursor-pointer"
        >
          Next Question
        </div>
        <footer className="bg-gray-100 text-center lg:text-left">
        <div className="text-center text-gray-700 p-4">
          © {getYear()} <a className="text-blue-600 font-semibold" href="https://aravindnatch.me/">Aravind Natchiappan</a>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default Game