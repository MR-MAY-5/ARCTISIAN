import React from 'react'
import { useEffect, useState } from "react";


const Account = () => {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);

 const [accaddr, setaccaddr] = useState(null);

 useEffect(() => {
  if (window.ethereum) {
      setIsWalletInstalled(true);
  }
  else{
    alert("Please install Metamask from your Browser Extension")
    setIsWalletInstalled(false);
  } 
}, []);


    const connectmeta = async () => {
      
      window.ethereum
      .request({
          method: "eth_requestAccounts",
      })
      .then((accounts) => {
          setaccaddr(accounts[0]);
      })
      .catch((error) => {
          alert("Something went wrong");
      });
    
    }
    

  return (
    <section className="max-w-7xl mx-auto">
    <div className='flex items-center gap-7'> 
        <h1 className="font-extrabold text-[#222328] text-[32px]">Connect</h1>
        <button type="button"
            onClick={connectmeta} 
            className="text-white bg-gray-600 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">Metamask</button>
         
    </div>
    <div className='flex items-center'> 
    <p className="flex  mt-2 text-gray-700 text-[14px]  max-w-[500px]">Connected as : {accaddr}</p>
    </div>
    </section>
  )
    
}

export default Account