import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";


export default function GoldPage(){

const goldArticles = articles.filter(

(article)=>
article.category === "Gold"

);


return (

<main className="min-h-screen bg-gray-100 p-10">


<h1 className="
text-5xl
font-bold
">

Gold News

</h1>


<p className="mt-4 text-gray-600">

Latest gold price and XAU/USD updates.

</p>



<div className="
mt-10
grid
gap-8
md:grid-cols-3
">


{
goldArticles.map(article=>(

<ArticleCard

key={article.slug}

article={article}

/>

))
}


</div>


</main>

);

}