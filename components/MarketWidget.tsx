"use client";

import { useEffect, useState } from "react";


type Market = {

  name:string;

  price:string;

  change:string;

};



export default function MarketWidget(){


const [markets,setMarkets] = useState<Market[]>([]);



useEffect(()=>{


async function getMarket(){


const res = await fetch("/api/market");


const data = await res.json();



setMarkets([

data.xauusd,

data.gold,

data.fed,

data.usd

]);


}


getMarket();


},[]);



return (

<div className="
grid
gap-5
md:grid-cols-4
">


{
markets.map((market)=>(


<div

key={market.name}

className="
rounded-xl
bg-white
p-5
shadow
"

>


<p className="
text-sm
text-gray-500
">

{market.name}

</p>



<h3 className="
mt-2
text-2xl
font-bold
">

{market.price}

</h3>



<p className="
mt-2
text-green-600
">

{market.change}

</p>



</div>


))

}


</div>

);


}