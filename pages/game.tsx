import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Game: NextPage = () => {
  const router = useRouter();
  var mode = 'normal';

  if (router.query.mode) {
    mode = String(router.query.mode);
  }

  useEffect(() => {
    if(!router.isReady) return;
  }, [router.isReady])

  const funny = ["What's the most embarrassing thing you've ever done?", "Have you ever broken the law? If so, why?", "What is your biggest pet peeve?", "What's the worst date you've been on?", "What's the best date you've been on?", "What is your favorite movie that you secretly know is actually terrible?", "What was the last time you've laughed the hardest?", "What's the most childish thing you still do?", "What is the most gross thing you have done today?", "What was your best moment in life so far?", "Who has the best sense of humor in this room?", "What's the most embarrassing music you listen to?", "What is the weirdest trend you've ever participated in?", "What's the last thing you Googled?", "What's the most adventurous thing you've ever done?", "Who's the last person you searched on Instagram?", "What's the drunkest you've ever been?", "Do you ever talk to yourself in the mirror?", "What is the weirdest thing you've ever bought?"]
  const random = Math.floor(Math.random() * funny.length);
  const [question, setQuestion] = useState(funny[random]);

  var gradient = ''

  if (mode == 'normal') {
    gradient = 'bg-gradient-to-r from-[#00C5FF] to-[#009BFF]';
  } else if (mode == 'party') {
    gradient = 'bg-gradient-to-r from-[#FFC300] to-[#FF8900]';
  } else if (mode == 'dirty') {
    gradient = 'bg-gradient-to-r from-[#FF006D] to-[#FC0023]';
  } else if (mode == 'intimate') {
    gradient = 'bg-gradient-to-r from-[#EA00C3] to-[#BE00FF]';
  } else if (mode == 'mix') {
    gradient = 'bg-black';
  }

  return (
    <div>
      <Head>
        <title>Truth or Drink</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen">
        
      <Link href='/'>
        <div>
          <div className="text-4xl text-header font-semibold mx-auto text-center align-middle pt-4 pb-2">
            TRUTH <span className="text-xl align-middle">O R</span> DRINK
          </div>
        
          <div className={[gradient, "rounded-lg text-center text-white font-bold max-w-fit px-4 m-auto"].join(" ")}>
              {mode.toUpperCase().split('').join(' ')}
          </div>
        </div>
      </Link>
      
        <div className="p-4 flex flex-grow ">
          <div className="flex items-center justify-center text-5xl text-white text-header font-semibold text-center bg-black rounded-xl shadow-xl p-4">
            {question}
          </div>
        </div>

        <div 
          onClick={() => setQuestion(funny[Math.floor(Math.random() * funny.length)])}
          className="flex items-center justify-center text-3xl font-bold text-center rounded-xl mx-20 mb-4 py-4"
        >
          Next Question
        </div>
      </div>
    </div>
  )
}

export default Game