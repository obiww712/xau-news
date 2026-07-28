import { NextResponse } from "next/server";


export async function GET() {


  const market = {

    xauusd: {
      name: "XAU/USD",
      price: "3350.50",
      change: "+0.45%",
    },


    gold: {
      name: "Gold",
      price: "3350 USD/oz",
      change: "+0.30%",
    },


    fed: {
      name: "Fed Rate",
      price: "4.25%",
      change: "Stable",
    },


    usd: {
      name: "USD Index",
      price: "98.50",
      change: "-0.20%",
    },


  };


  return NextResponse.json(market);

}