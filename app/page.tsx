import SearchBar from "@/components/SearchBar";
import MarketWidget from "@/components/MarketWidget";
import ArticleCard from "@/components/ArticleCard";
import AdBanner from "@/components/AdBanner";
import { articles } from "@/data/articles";


export default function Home() {


  const featured = articles.slice(0, 3);



  return (

    <main className="bg-gray-100">


      {/* HERO */}

      <section className="
        bg-black
        px-10
        py-24
        text-white
      ">


        <div className="
          mx-auto
          max-w-7xl
        ">


          <h1 className="
            text-6xl
            font-bold
            text-yellow-400
          ">

            XAU News

          </h1>



          <p className="
            mt-5
            max-w-3xl
            text-xl
            text-gray-300
          ">

            Latest gold price,
            XAU/USD analysis,
            forex news and global economic updates.

          </p>


        </div>


      </section>




      {/* SEARCH */}

      <section className="
        mx-auto
        max-w-7xl
        px-10
        py-10
      ">


        <SearchBar />


      </section>





      {/* MARKET OVERVIEW */}

      <section className="
        mx-auto
        max-w-7xl
        px-10
        py-12
      ">


        <h2 className="
          mb-8
          text-3xl
          font-bold
        ">

          Market Overview

        </h2>



        <MarketWidget />


      </section>






      {/* ADS */}

      <section className="
        mx-auto
        max-w-7xl
        px-10
      ">


        <AdBanner />


      </section>






      {/* LATEST NEWS */}

      <section className="
        mx-auto
        max-w-7xl
        px-10
        py-12
      ">


        <div className="
          flex
          items-center
          justify-between
        ">


          <h2 className="
            text-3xl
            font-bold
          ">

            Latest News

          </h2>



          <a

            href="/news"

            className="
              text-yellow-600
              hover:underline
            "

          >

            View All →

          </a>


        </div>





        <div className="
          mt-8
          grid
          gap-8
          md:grid-cols-3
        ">


          {
            featured.map((article)=>(

              <ArticleCard

                key={article.id}

                article={article}

              />

            ))
          }


        </div>



      </section>





    </main>

  );

}