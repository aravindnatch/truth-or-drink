import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import Script from 'next/script'

import normal from '../bank/normal.json';
import party from '../bank/party.json';
import dirty from '../bank/dirty.json';
import dares from '../bank/dares.json';

const Home: NextPage = () => {
  const [bank, setBank] = useState(normal);
  const ref = useRef(null);

  useEffect(() => {
    const el = (document.getElementById('bank') as HTMLInputElement).value;
    bankSelector(el);
  }, [])

  const handleChange = (e: any) => {
    bankSelector(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const mode = e.target[0].value;
    const question = e.target[1].value;
    const offset = e.target[2].value;
    const knownModes = ['normal', 'party', 'dirty', 'dares'];
    
    if (isNaN(question) || isNaN(offset) || !knownModes.includes(mode)) { return }

    const url = `/game?mode=${mode}&q=${question}&offset=${offset}`;
    window.location.href = url;
  }

  const bankSelector = (bank: any) => {
    switch (bank) {
      case "party":
        setBank(party);
        break;
      case "dirty":
        setBank(dirty);
        break;
      case "dares":
        setBank(dares);
        break;
      case "mix":
        setBank([...normal, ...party, ...dirty, ...dares]);
        break;

      default:
        setBank(normal);
    }
  }

  return (
    <>
      <div className="h-full">
        <Script src="https://omni.aru.wtf/script.js"></Script>
        <Head>
          <title>Truth or Drink</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container flex mx-auto p-4 fixmobilevh">
          <div className="m-auto">
            <div className="max-w-3xl cursor-pointer">
              <form onSubmit={handleSubmit}>
                <div>
                  <select ref={ref} id={"bank"} onChange={handleChange}>
                    <option value="normal">Normal</option>
                    <option value="party">Party</option>
                    <option value="dirty">Dirty</option>
                    <option value="dares">Dares</option>
                    <option value="mix">Mix</option>
                  </select>
                </div>
                <div>
                  <select className="max-w-md text-ellipsis">
                    {
                      bank.map((item, index) => {
                        return <option key={index} value={index}>{item}</option>
                      })
                    }
                  </select>
                </div>
                <div>
                  <select>
                    {[...Array(10)].map((e, i) => <option key={i} value={i}>{i+1}</option>)}
                  </select>
                </div>
                <div>
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
