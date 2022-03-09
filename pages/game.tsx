import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import { useRouter } from "next/router";
import Head from 'next/head'
import Link from 'next/link';

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
    const questions = [
      ["What's the most embarrassing thing you've ever done?", "Have you ever broken the law? If so, why?", "What is your biggest pet peeve?", "What's the worst date you've been on?", "What's the best date you've been on?", "What is your favorite movie that you secretly know is actually terrible?", "What was the last time you've laughed the hardest?", "What's the most childish thing you still do?", "What is the most gross thing you have done today?", "What was your best moment in life so far?", "Who has the best sense of humor in this room?", "What's the most embarrassing music you listen to?", "What is the weirdest trend you've ever participated in?", "What's the last thing you Googled?", "What's the most adventurous thing you've ever done?", "Who's the last person you searched on Instagram?", "What's the drunkest you've ever been?", "Do you ever talk to yourself in the mirror?", "What is the weirdest thing you've ever bought?"],
      ["What's your most embarrassing fantasy?", "What kind of porn do you search for?", "When watching porn, what makes you turn it off?", "Have you ever joined a hook-up app or any app associated with risky behavior?", "How many “toys” do you own?", "What's the best sex you've ever had?", "What's the weirdest role play you've ever done?", "What's the raunchiest dream you've ever had?", "What's the landscaping like “down there?”", "What's the dirtiest picture you've ever sent?", "What's the dirtiest text you've sent?", "Have you ever hooked up with someone you didn't know?", "What's the most outrageous thing you can remember doing while “under the influence?”", "What is something “scandalous” and sex-related that you really want to try?", "Are you more dominant or submissive?", "If you were a sex worker, how much would each sex act cost?", "Have you ever asked for a dirty pic?", "How do you initiate sex with your partner?", "Would you ever film yourself “in the act?”", "How likely are you to ever consider being a stripper? What about a porn star?", "What's the soonest you've ever had sex with someone after meeting them?", "If you were going to write an erotic novel, what would it be about?", "What was the last thing you masturbated to?", "If you could have sex with one person in this room, who would it be?", "What's your magic number now, and what do you wish it was?", "What's the weirdest thing that's ever turned you on?", "Which sexual act are you best at?", "How many sex toys do you own?", "How many orgasms have you faked?", "What is your biggest sexual regret?", "What's the dirtiest sext you've ever sent?", "Who's the most scandalous person you've had sex with?", "Have you ever slept with someone you met online?", "Have you ever been caught masturbating?", "What do you like to be called in bed?", "What movie always turns you on?", "What's your favorite body part on a girl?", "Describe the most embarrassing time you got turned on.", "Have you ever thought about sleeping with the same sex?", "What is your strangest off-limits crush?", "If you got to have a threesome with people in this room, who would you do it with and why?", "Where is the weirdest place that you've ever masturbated?", "Describe your “I'm getting laid tonight” outfit?", "Have you ever slept with someone from work?", "What is more thrilling, makeup or angry sex?", "How many times a week do you touch yourself?", "Have you ever done IT at work?", "Do you like telling your partner what to do in bed, or do you prefer to be told what to do?", "Have you ever walked in on your parents doing it?", "Have you ever thought of someone else while you were sleeping with someone?", "Describe your crush's personality.", "Do you find your friend's sibling attractive?", "If given the chance, would you sleep with your boss?", "Have you ever farted while spooning with someone?", "Have you ever done a striptease for someone?", "What is the grossest thing you've done today?", "Have you ever flirted with a friend's partner?"],
      ["What's your biggest fantasy?", "Where's the weirdest place you've had sex?", "Do you enjoy dirty talk?", "Have you ever had a 'friends with benefits' situation? If so, who with?", "What's the best intimate experience you've ever had?", "Do you have any fetishes?", "What's your biggest turn on?", "Who would you most like to kiss in this room?", "What's your favorite body part on another person?", "Have you ever read erotic fiction?", "When did you lose your virginity?", "What's the longest you've gone without sex?", "Have you ever fallen asleep during sex?", "What was your most embarrassing sexual experience?", "What is your favorite sex position?", "What's your biggest turn off?", "Have you ever slept with someone then immediately regretted it?", "Have you ever hooked up with a friend?", "If you could only do one sex act for the rest of your life, what would it be?", "What is the dirtiest text you've received?", "What is the dirtiest text you've sent?", "Have you faked an orgasm?", "Describe your best orgasm. How long did it last?"],
      ["Make your 'O' face.", "Reenact your special move.", "Make out with your pillow for 10 seconds.", "Act out the last time you did it.", "Act out the first time you did it.", "Attempt to twerk.", "Lap dance on a chair.", "Do a sexy dance with a broom.", "Reenact the opposite gender in bed.", "Suck your finger passionately for 15 seconds.", "Pretend you're giving a formal presentation about a detailed summary of how you like it in bed.", "Try to take off your underwear/bra without flashing.", "Give your best 'ready for you' face.", "Incorporate a towel into a seductive dance.", "Seductively shave one of your legs.", "Fake an orgasm.", "Crawl on the ground seductively.", "Give the closest thing to your left a passionate kiss.", "Make out with yourself in the mirror.", "Give a speech like you're hitting on someone.", "Take a video of you spanking yourself.", "Pretend you're doing the deed with the closest thing to your right.", "Put on your sexiest song and catwalk and send it as a video.", "Demonstrate how to put a protection on and send it as a video.", "Grind on a pillow for 20 seconds.", "Take your pants off.", "Send a sexy text to your third contact.", "Change your Facebook status to 'single and ready to mingle' or 'ready for head tonight'", "Leave a dirty voicemail for your ex.", "Text your best friend and ask for sex tips.", "Text your ex and ask if there's anything you can improve on in bed.", "Take off your shirt and swing it in the air.", "Put on the sexist outfit you own.", "In a video, demonstrate the most flexible position you can do.", "Change your Facebook status to 'wanting quick hookup'", "Send your dirtiest text with three sexy emojis.", "Describe yourself seductively.", "Do the WAP dance and send it to your partner or ex.", "Tell your partner or crush that they are a 'leg spreader'", "Text a random person and ask them if they think you're hot.", "Talk without opening your mouth.", "Do your best moan or grunt.", "Eat a banana in a seductive manner.", "Write your ex's/ partner's name on your underwear in sharpie and send it to them.", "Comment on your celebrity crush's post and say you get turned on by them.", "Tweet your crush and explain to them that you think of them in bed.", "Demonstrate your biggest turn-on.", "Demonstrate your biggest turn-off.", "Send a picture as if you were on top.", "Send a picture of you praying on your knees to your ex.", "Tell your partner or ex that you want to try a different position.", "Call someone and explain your biggest turn-on.", "Change your Facebook status to 'lonely tonight.'", "Take a screenshot of your text log.", "Send a link to your favorite adult site.", "Explain your favorite videos and why.", "Demonstrate your wildest fantasies.", "Send a voice message of you moaning to your partner.", "Drop an ice cube in your pants.", "Send a winky face to your most recent contact.", "Send the drooling emoji to your ex.", "Send a voice message of your dirtiest thoughts.", "Text like you are doing the deed right now.", "Pour a drink into your mouth.", "Send a video of you seductively dancing to a friend.", "Create a sex playlist and share it with your most recent caller.", "Send a video of you slowly picking up something to your partner.", "Without you in the frame, send a video of you throwing your clothes across the room.", "Send a video of you doing a sexy dance to a non-sexual song to your closest friend."],
      ["What's the most embarrassing thing you've ever done?", "Have you ever broken the law? If so, why?", "What is your biggest pet peeve?", "What's the worst date you've been on?", "What's the best date you've been on?", "What is your favorite movie that you secretly know is actually terrible?", "What was the last time you've laughed the hardest?", "What's the most childish thing you still do?", "What is the most gross thing you have done today?", "What was your best moment in life so far?", "Who has the best sense of humor in this room?", "What's the most embarrassing music you listen to?", "What is the weirdest trend you've ever participated in?", "What's the last thing you Googled?", "What's the most adventurous thing you've ever done?", "Who's the last person you searched on Instagram?", "What's the drunkest you've ever been?", "Do you ever talk to yourself in the mirror?", "What is the weirdest thing you've ever bought?", "What's your most embarrassing fantasy?", "What kind of porn do you search for?", "When watching porn, what makes you turn it off?", "Have you ever joined a hook-up app or any app associated with risky behavior?", "How many “toys” do you own?", "What's the best sex you've ever had?", "What's the weirdest role play you've ever done?", "What's the raunchiest dream you've ever had?", "What's the landscaping like “down there?”", "What's the dirtiest picture you've ever sent?", "What's the dirtiest text you've sent?", "Have you ever hooked up with someone you didn't know?", "What's the most outrageous thing you can remember doing while “under the influence?”", "What is something “scandalous” and sex-related that you really want to try?", "Are you more dominant or submissive?", "If you were a sex worker, how much would each sex act cost?", "Have you ever asked for a dirty pic?", "How do you initiate sex with your partner?", "Would you ever film yourself “in the act?”", "How likely are you to ever consider being a stripper? What about a porn star?", "What's the soonest you've ever had sex with someone after meeting them?", "If you were going to write an erotic novel, what would it be about?", "What was the last thing you masturbated to?", "If you could have sex with one person in this room, who would it be?", "What's your magic number now, and what do you wish it was?", "What's the weirdest thing that's ever turned you on?", "Which sexual act are you best at?", "How many sex toys do you own?", "How many orgasms have you faked?", "What is your biggest sexual regret?", "What's the dirtiest sext you've ever sent?", "Who's the most scandalous person you've had sex with?", "Have you ever slept with someone you met online?", "Have you ever been caught masturbating?", "What do you like to be called in bed?", "What movie always turns you on?", "What's your favorite body part on a girl?", "Describe the most embarrassing time you got turned on.", "Have you ever thought about sleeping with the same sex?", "What is your strangest off-limits crush?", "If you got to have a threesome with people in this room, who would you do it with and why?", "Where is the weirdest place that you've ever masturbated?", "Describe your “I'm getting laid tonight” outfit?", "Have you ever slept with someone from work?", "What is more thrilling, makeup or angry sex?", "How many times a week do you touch yourself?", "Have you ever done IT at work?", "Do you like telling your partner what to do in bed, or do you prefer to be told what to do?", "Have you ever walked in on your parents doing it?", "Have you ever thought of someone else while you were sleeping with someone?", "Describe your crush's personality.", "Do you find your friend's sibling attractive?", "If given the chance, would you sleep with your boss?", "Have you ever farted while spooning with someone?", "Have you ever done a striptease for someone?", "What is the grossest thing you've done today?", "Have you ever flirted with a friend's partner?", "What's your biggest fantasy?", "Where's the weirdest place you've had sex?", "Do you enjoy dirty talk?", "Have you ever had a 'friends with benefits' situation? If so, who with?", "What's the best intimate experience you've ever had?", "Do you have any fetishes?", "What's your biggest turn on?", "Who would you most like to kiss in this room?", "What's your favorite body part on another person?", "Have you ever read erotic fiction?", "When did you lose your virginity?", "What's the longest you've gone without sex?", "Have you ever fallen asleep during sex?", "What was your most embarrassing sexual experience?", "What is your favorite sex position?", "What's your biggest turn off?", "Have you ever slept with someone then immediately regretted it?", "Have you ever hooked up with a friend?", "If you could only do one sex act for the rest of your life, what would it be?", "What is the dirtiest text you've received?", "What is the dirtiest text you've sent?", "Have you faked an orgasm?", "Describe your best orgasm. How long did it last?", "Make your 'O' face.", "Reenact your special move.", "Make out with your pillow for 10 seconds.", "Act out the last time you did it.", "Act out the first time you did it.", "Attempt to twerk.", "Lap dance on a chair.", "Do a sexy dance with a broom.", "Reenact the opposite gender in bed.", "Suck your finger passionately for 15 seconds.", "Pretend you're giving a formal presentation about a detailed summary of how you like it in bed.", "Try to take off your underwear/bra without flashing.", "Give your best 'ready for you' face.", "Incorporate a towel into a seductive dance.", "Seductively shave one of your legs.", "Fake an orgasm.", "Crawl on the ground seductively.", "Give the closest thing to your left a passionate kiss.", "Make out with yourself in the mirror.", "Give a speech like you're hitting on someone.", "Take a video of you spanking yourself.", "Pretend you're doing the deed with the closest thing to your right.", "Put on your sexiest song and catwalk and send it as a video.", "Demonstrate how to put a protection on and send it as a video.", "Grind on a pillow for 20 seconds.", "Take your pants off.", "Send a sexy text to your third contact.", "Change your Facebook status to 'single and ready to mingle' or 'ready for head tonight'", "Leave a dirty voicemail for your ex.", "Text your best friend and ask for sex tips.", "Text your ex and ask if there's anything you can improve on in bed.", "Take off your shirt and swing it in the air.", "Put on the sexist outfit you own.", "In a video, demonstrate the most flexible position you can do.", "Change your Facebook status to 'wanting quick hookup'", "Send your dirtiest text with three sexy emojis.", "Describe yourself seductively.", "Do the WAP dance and send it to your partner or ex.", "Tell your partner or crush that they are a 'leg spreader'", "Text a random person and ask them if they think you're hot.", "Talk without opening your mouth.", "Do your best moan or grunt.", "Eat a banana in a seductive manner.", "Write your ex's/ partner's name on your underwear in sharpie and send it to them.", "Comment on your celebrity crush's post and say you get turned on by them.", "Tweet your crush and explain to them that you think of them in bed.", "Demonstrate your biggest turn-on.", "Demonstrate your biggest turn-off.", "Send a picture as if you were on top.", "Send a picture of you praying on your knees to your ex.", "Tell your partner or ex that you want to try a different position.", "Call someone and explain your biggest turn-on.", "Change your Facebook status to 'lonely tonight.'", "Take a screenshot of your text log.", "Send a link to your favorite adult site.", "Explain your favorite videos and why.", "Demonstrate your wildest fantasies.", "Send a voice message of you moaning to your partner.", "Drop an ice cube in your pants.", "Send a winky face to your most recent contact.", "Send the drooling emoji to your ex.", "Send a voice message of your dirtiest thoughts.", "Text like you are doing the deed right now.", "Pour a drink into your mouth.", "Send a video of you seductively dancing to a friend.", "Create a sex playlist and share it with your most recent caller.", "Send a video of you slowly picking up something to your partner.", "Without you in the frame, send a video of you throwing your clothes across the room.", "Send a video of you doing a sexy dance to a non-sexual song to your closest friend."]
    ];
  
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