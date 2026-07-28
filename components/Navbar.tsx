"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";


export default function Navbar() {

  const [open, setOpen] = useState(false);


  const menu = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "News",
      href: "/news",
    },
    {
      name: "Gold",
      href: "/gold",
    },
    {
      name: "Forex",
      href: "/forex",
    },
    {
      name: "Interest Rate",
      href: "/interest-rate",
    },
    {
      name: "Analysis",
      href: "/analysis",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];


  return (

    <nav className="
      border-b
      bg-white
      px-6
      py-5
    ">


      <div className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between
      ">


        {/* Logo */}

        <Link

          href="/"

          className="
            text-2xl
            font-bold
            text-yellow-600
          "

        >

          XAU News

        </Link>



        {/* Desktop Menu */}

        <div className="
          hidden
          gap-6
          font-medium
          text-gray-700
          md:flex
        ">


          {
            menu.map((item)=>(

              <Link

                key={item.href}

                href={item.href}

                className="
                  hover:text-yellow-600
                "

              >

                {item.name}

              </Link>

            ))
          }


        </div>



        {/* Mobile Button */}

        <button

          onClick={() => setOpen(!open)}

          className="
            md:hidden
          "

        >

          {
            open ?

            <X size={28}/>

            :

            <Menu size={28}/>

          }


        </button>


      </div>




      {/* Mobile Menu */}

      {
        open && (

          <div className="
            mt-6
            flex
            flex-col
            gap-4
            text-gray-700
            md:hidden
          ">


            {
              menu.map((item)=>(

                <Link

                  key={item.href}

                  href={item.href}

                  onClick={() => setOpen(false)}

                  className="
                    hover:text-yellow-600
                  "

                >

                  {item.name}

                </Link>

              ))
            }


          </div>

        )
      }


    </nav>

  );

}