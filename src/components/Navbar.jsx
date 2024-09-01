import React from "react";
import im1 from "../../public/6be8c6fb6acd5fc7f978e17fe6f181f8.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import im2 from "../../public/587c7eef45eb9a9032bd7861bea4ff03 (1).jpg";
import im3 from "../../public/mingcute_plus-fill.png";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#B2D9FF] to-[#0180FF] h-[662px] w-[100%]">
        <div className=" h-[150px] bg-gradient-to-r from-[#B2D9FF] to-[#0180FF] flex justify-between mx-3">
          <div className="h-[150px] w-[250px] object-contain flex justify-center items-center">
            <Link href="/">
              {" "}
              <Image src={im1} />
            </Link>
          </div>
          <div className="w-[531px] h-[68px] bg-[#FFF6F64D] relative top-[44px] rounded-[50px] flex justify-around items-center text-[18px] max-[880px]:hidden">
            <div className="hover:scale-125 duration-150 hover:font-bold">
              <Link href="/">Home</Link>
            </div>
            <div className="hover:scale-125 duration-150 hover:font-bold">
              <Link href="/">Our Services</Link>
            </div>
            <div className="hover:scale-125 duration-150 hover:font-bold">
              <Link href="/">Find Doctor</Link>
            </div>
          </div>
          <div className="relative top-[50px] flex gap-3 max-[1118px]:hidden">
            <Button
              variant="ghost"
              className="w-[200px] h-[50px] font-bold bg-gradient-to-r from-[#00D7CF] to-[#53A7FF] text-white text-[18px] rounded-3xl"
            >
             <Link href="/">Log in </Link><span className="p-[5px]"> /</span> <Link href="/">Register</Link>
            </Button>
          </div>
          <div className="min-[1118px]:hidden relative top-[55px]">
            <Sheet>
              <SheetTrigger asChild>
              <Button variant="outline">  <Menu /></Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                <SheetFooter>
                  <SheetClose asChild>
                    <Button >Home</Button>
                  </SheetClose>
                </SheetFooter>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button >Our Services</Button>
                  </SheetClose>
                </SheetFooter>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button >Find Doctor</Button>
                  </SheetClose>
                </SheetFooter>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button >Signup</Button>
                  </SheetClose>
                </SheetFooter>
                  <SheetFooter>
                  <SheetClose asChild>
                    <Button >Login</Button>
                  </SheetClose>
                </SheetFooter>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="flex h-[510px] max-[1127px]:flex-col">
          <div className="min-[1128px]:w-[50%] flex-col flex max-[1128px]:h-[500px] justify-center items-center gap-[30px]">
            <div className="flex justify-center max-[1128px]:items-center">
              <h1 className="text-[50px] max-[882px]-w-[100%] max-[550px]:text-[40px] leading-snug font-medium pl-[80px] min-[882px]:pr-[150px]  ">
                Find the Right Doctor, Right Now !
              </h1>
            </div>
            <div className="flex ml-[150px] min-[882px]:ml-[150px] max-[1128px]:ml-[150px]  max-[1128px]:items-center w-[100%]">
              <button className="w-[180px] text-[18px] h-[50px] bg-[#ffffff] text-black rounded-3xl font-bold">
                Open 24 hs
              </button>
            </div>
          </div>
          <div className="min-[1128px]:w-[50vw] flex justify-center items-center max-[1128px]:hidden">
            <div className="h-[180px] w-[180px] bg-white flex justify-center items-center rounded-full absolute z-[999] mr-[500px] mb-[250px]">
              <Image src={im3} className="" />
            </div>
            <div className="h-[80px] w-[80px] bg-white flex justify-center items-center rounded-full absolute z-[999] mr-[700px] mt-[50px]">
              <Image src={im3} className="" />
            </div>
            <div className="h-[100px] w-[100px] bg-white flex justify-center items-center rounded-full absolute z-[999] mr-[520px] mt-[250px]">
              <Image src={im3} className="" />
            </div>
            <Image
              src={im2}
              className="h-[500px] w-[500px] rounded-full absolute"
            />
            <div className="h-[130px] w-[130px] bg-white flex justify-center items-center rounded-full absolute z-[999] ml-[550px]">
              <Image src={im3} className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
