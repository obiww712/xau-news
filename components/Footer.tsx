import Link from "next/link";


export default function Footer() {


  return (

    <footer className="
      mt-20
      bg-black
      px-10
      py-10
      text-gray-300
    ">


      <div className="
        mx-auto
        grid
        max-w-7xl
        gap-10
        md:grid-cols-3
      ">



        {/* BRAND */}

        <div>


          <h2 className="
            text-2xl
            font-bold
            text-yellow-400
          ">

            XAU News

          </h2>



          <p className="
            mt-4
            leading-7
          ">

            Financial news platform covering
            gold prices, XAU/USD, forex,
            interest rates, and global markets.

          </p>


        </div>





        {/* LINKS */}

        <div>


          <h3 className="
            text-xl
            font-bold
            text-white
          ">

            Quick Links

          </h3>



          <div className="
            mt-4
            flex
            flex-col
            gap-3
          ">


            <Link
              href="/"
              className="hover:text-yellow-400"
            >

              Home

            </Link>



            <Link
              href="/news"
              className="hover:text-yellow-400"
            >

              News

            </Link>



            <Link
              href="/about"
              className="hover:text-yellow-400"
            >

              About

            </Link>



            <Link
              href="/contact"
              className="hover:text-yellow-400"
            >

              Contact

            </Link>



            <Link
              href="/privacy"
              className="hover:text-yellow-400"
            >

              Privacy Policy

            </Link>


            <Link
  href="/terms"
  className="hover:text-yellow-400"
>

  Terms & Conditions

</Link>


          </div>


        </div>





        {/* DISCLAIMER */}

        <div>


          <h3 className="
            text-xl
            font-bold
            text-white
          ">

            Disclaimer

          </h3>



          <p className="
            mt-4
            leading-7
          ">

            XAU News provides financial information
            for educational purposes only.

            The content on this website is not
            financial advice. Always conduct your
            own research before making investment
            decisions.

          </p>


        </div>


      </div>





      <div className="
        mx-auto
        mt-10
        max-w-7xl
        border-t
        border-gray-700
        pt-5
        text-center
        text-sm
      ">


        © {new Date().getFullYear()} XAU News.
        All rights reserved.


      </div>



    </footer>

  );

}