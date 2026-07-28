import { MetadataRoute } from "next";


export default function sitemap()
: MetadataRoute.Sitemap {


  return [

    {
      url:
      "https://www.xaunews.com",

      lastModified:
      new Date(),

    },


    {
      url:
      "https://www.xaunews.com/news",

      lastModified:
      new Date(),

    },


    {
      url:
      "https://www.xaunews.com/about",

      lastModified:
      new Date(),

    },


    {
      url:
      "https://www.xaunews.com/contact",

      lastModified:
      new Date(),

    },


    {
      url:
      "https://www.xaunews.com/privacy",

      lastModified:
      new Date(),

    },


  ];

}