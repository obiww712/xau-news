import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";


export default function AnalysisPage() {


const analysisArticles = articles.filter(

(article) =>

article.category === "Analysis"

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

Market Analysis

</h1>



<p className="
mt-4
text-gray-600
">

Gold, XAU/USD and global market analysis.

</p>




<div className="
mt-10
grid
gap-8
md:grid-cols-3
">


{
analysisArticles.map((article) => (

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