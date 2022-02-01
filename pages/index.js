import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Input from '../components/input'
import DropDown from '../components/dropdown'
import { useEffect, useState, useMemo } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { LockClosedIcon } from '@heroicons/react/solid'






export default function Home() {
  const [value, setValue] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("EURO");
  const [toCurrency, setToCurrency] = useState("");
  const [currencies] = useState(["ZWL", "USD", "CAD", "AED"]);
  const [result, setResult] = useState(0);

  const fromCurrencies = useMemo(() => {
    return currencies.filter((c) => c !== toCurrency);
  }, [currencies, toCurrency]);

  const toCurrencies = useMemo(() => {
    return currencies.filter((c) => c !== fromCurrency);
  }, [currencies, fromCurrency]);


  //This api is a free one so i did not use useEffect hook 
  //so that i do not exhaust my monthly allowed hits
  const convert = async (e) => {

    const res = await fetch(
      `http://api.exchangeratesapi.io/latest?access_key=a6f2f95fbb352f66ae967a3322c9b2c8&base=EUR`
    );
    const { rates } = await res.json();
    setResult(+value * rates[toCurrency]);
    return
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div class="w-full h-screen font-sans bg-cover bg-landscape login-bg">

        <div class="container flex items-center justify-center flex-1 h-full mx-auto">

          <div className="mb-12 h-12 w-auto ">
            <h1 className='text-lg font-bold '> {value} {fromCurrency} is {result.toFixed(2)} {toCurrency}</h1>
          </div>
          <div class="w-full max-w-lg">
            <div class="leading-loose">

              <div class="max-w-sm p-10 m-auto bg-white bg-opacity-5 rounded shadow-xl shadow-blue-500/50">
                <div>
                  <Input Inputlabel="From" value={value} onChange={(e) => setValue(e.target.value)} />
                  <br></br>
                  <DropDown value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)} toCurrencies={toCurrencies} />
                  <br></br>
                  <button
                    onClick={() => convert()}
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
                    </span>
                    CONVERT
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}
