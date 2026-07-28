import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";


export default function ForexPage(){


const forexArticles = articles.filter(

(article)=>
article.category === "Forex"

);



return (

<main className="min-h-screen bg-gray-100 p-10">


<h1 className="text-5xl font-bold">

Forex News

</h1>


<p className="mt-4 text-gray-600">

Latest currency market updates.

</p>



<div className="
mt-10
grid
gap-8
md:grid-cols-3
">


{
forexArticles.map(article=>(

<ArticleCard

key={article.id}

article={article}

/>

))
}


</div>


</main>

);

}