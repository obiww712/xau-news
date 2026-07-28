import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";


type SearchProps = {

  searchParams: Promise<{
    q?: string;
  }>;

};



export default async function SearchPage({

  searchParams,

}: SearchProps) {


  const { q } = await searchParams;


  const keyword =
    q?.toLowerCase() || "";



  const results =
    articles.filter((article)=>


      article.title
      .toLowerCase()
      .includes(keyword)


      ||

      article.category
      .toLowerCase()
      .includes(keyword)


      ||

      article.description
      .toLowerCase()
      .includes(keyword)


      ||

      article.content
      .toLowerCase()
      .includes(keyword)


    );




  return (

    <main className="
      min-h-screen
      bg-gray-100
      p-10
    ">


      <section className="
        mx-auto
        max-w-7xl
      ">


        <h1 className="
          text-4xl
          font-bold
        ">

          Search Results

        </h1>



        <p className="
          mt-3
          text-gray-600
        ">

          Keyword:
          {" "}
          {q || "All"}

        </p>




        {
          results.length === 0 ?

          (

            <p className="
              mt-10
              text-gray-500
            ">

              No articles found.

            </p>

          )


          :

          (

            <div className="
              mt-10
              grid
              gap-8
              md:grid-cols-3
            ">


              {
                results.map((article)=>(

                  <ArticleCard

                    key={article.slug}

                    article={article}

                  />

                ))
              }


            </div>

          )

        }


      </section>


    </main>

  );

}