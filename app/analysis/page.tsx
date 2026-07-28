import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";


export default function AnalysisPage(){


const items = articles.filter(

(article)=>
article.category === "Analysis"

);



return (

<main className="min-h-screen bg-gray-100 p-10">


<h1 className="text-5xl font-bold">

Market Analysis

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

key={article.id}

article={article}

/>

))
}


</div>


</main>

);

}