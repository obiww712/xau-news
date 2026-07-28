import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";


export default function InterestRatePage(){


const items = articles.filter(

(article)=>
article.category === "Interest Rate"

);



return (

<main className="min-h-screen bg-gray-100 p-10">

<h1 className="text-5xl font-bold">

Interest Rate News

</h1>


<div className="
mt-10
grid
gap-8
md:grid-cols-3
">


{
items.map(article=>(

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