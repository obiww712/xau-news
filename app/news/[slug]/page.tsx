import { articles } from "@/data/articles";
import Link from "next/link";
import { Metadata } from "next";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};



export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {


  const { slug } = await params;


  const article = articles.find(
    (item) => item.slug === slug
  );


  if (!article) {

    return {

      title: "Article Not Found",

    };

  }



  return {

    title:
      `${article.title} | XAU News`,


    description:
      article.description,


    openGraph: {

      title:
        article.title,


      description:
        article.description,


      type:
        "article",


      publishedTime:
        article.date,

    },


  };

}




export default async function ArticlePage({

  params,

}: Props) {


  const { slug } = await params;



  const article = articles.find(

    (item) => item.slug === slug

  );



  if (!article) {


    return (

      <main className="p-10">

        <h1 className="
          text-4xl
          font-bold
        ">

          Article Not Found

        </h1>

      </main>

    );

  }




  const schema = {

    "@context":
      "https://schema.org",


    "@type":
      "NewsArticle",


    headline:
      article.title,


    description:
      article.description,


    author: {

      "@type":
        "Person",

      name:
        article.author,

    },


    datePublished:
      article.date,


    image:
      article.image,

  };




  return (

    <main className="
      min-h-screen
      bg-gray-100
      p-10
    ">


      <article className="
        mx-auto
        max-w-4xl
        rounded-xl
        bg-white
        p-8
        shadow
      ">


        <script

          type="application/ld+json"

          dangerouslySetInnerHTML={{

            __html:
              JSON.stringify(schema),

          }}

        />



        <p className="
          font-semibold
          text-yellow-600
        ">

          {article.category}

        </p>



        <h1 className="
          mt-3
          text-5xl
          font-bold
        ">

          {article.title}

        </h1>



        <p className="
          mt-5
          text-sm
          text-gray-500
        ">

          By {article.author}
          {" • "}
          {article.date}

        </p>




        <img

          src={article.image}

          alt={article.title}

          className="
            mt-8
            h-96
            w-full
            rounded-xl
            object-cover
          "

        />




        <div className="
          mt-8
          whitespace-pre-line
          text-lg
          leading-8
          text-gray-700
        ">

          {article.content}

        </div>




        <Link

          href="/news"

          className="
            mt-10
            inline-block
            text-blue-600
          "

        >

          ← Back to News

        </Link>



      </article>


    </main>

  );

}