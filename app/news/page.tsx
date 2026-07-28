import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import AdBanner from "@/components/AdBanner";


export default function NewsPage() {

  return (

    <main className="min-h-screen bg-gray-100 p-10">


      <section className="mx-auto max-w-7xl">


        <h1 className="
          text-5xl
          font-bold
        ">

          Latest Financial News

        </h1>


        <p className="
          mt-4
          text-gray-600
        ">

          Latest updates about gold,
          XAU/USD, forex, interest rates,
          and global financial markets.

        </p>


        <AdBanner />



        <div className="
          mt-10
          grid
          gap-8
          md:grid-cols-3
        ">


          {
            articles.map((article) => (

              <ArticleCard

                key={article.slug}

                article={article}

              />

            ))
          }


        </div>


      </section>


    </main>

  );

}