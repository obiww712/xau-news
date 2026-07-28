"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SearchBar(){


const [keyword,setKeyword] =
useState("");

const router =
useRouter();



function search(){


if(keyword.trim()){


router.push(
`/search?q=${keyword}`
);


}


}



return (

<div className="
flex
gap-3
">


<input

value={keyword}

onChange={(e)=>
setKeyword(e.target.value)
}

placeholder="
Search gold, forex, XAU/USD...
"

className="
w-full
rounded-lg
border
px-4
py-3
"

/>



<button

onClick={search}

className="
rounded-lg
bg-yellow-600
px-5
text-white
"

>

Search

</button>


</div>

);


}