import Link from "next/link";


export default function ArticleCard({
  article,
}: {
  article: any;
}) {


  return (

    <article className="
      overflow-hidden
      rounded-xl
      bg-white
      shadow
    ">


      <img

        src={article.image}

        alt={article.title}

        className="
          h-48
          w-full
          object-cover
        "

      />


      <div className="p-6">


        <p className="
          text-sm
          font-semibold
          text-yellow-600
        ">

          {article.category}

        </p>



        <h2 className="
          mt-3
          text-xl
          font-bold
        ">

          {article.title}

        </h2>



        <p className="
          mt-3
          text-gray-600
        ">

          {article.description}

        </p>



        <p className="
          mt-3
          text-sm
          text-gray-400
        ">

          {article.date}

        </p>



        <Link

          href={`/news/${article.slug}`}

          className="
            mt-5
            inline-block
            text-blue-600
            hover:underline
          "

        >

          Read Article →

        </Link>


      </div>


    </article>

  );

}