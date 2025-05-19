// // components/hero-section.tsx
// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectCoverflow } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   Menu,
//   ImageUp,
//   X,
//   Bot,
//   ScanSearch,
//   BadgeCheckIcon,
//   PaletteIcon,
//   ParkingCircleIcon,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const menuItems = [
//   { name: "", href: "#" },
//   { name: "", href: "#" },
//   { name: "", href: "#" },
//   { name: "", href: "#" },
// ];

// export default function HeroSection() {
//   const [menuState, setMenuState] = React.useState(false);
//   const router = useRouter();

//   const handleLoginClick = () => {
//     router.push("/login");
//   };

//   return (
//     <>
//       <header>
//         <nav
//           data-state={menuState && "active"}
//           className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
//         >
//           <div className="m-auto max-w-5xl px-6">
//             <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
//               <div className="flex w-full justify-between lg:w-auto">
//                 <Link
//                   href="/"
//                   aria-label="home"
//                   className="flex items-center space-x-2"
//                 ></Link>

//                 <button
//                   onClick={() => setMenuState(!menuState)}
//                   aria-label={menuState == true ? "Close Menu" : "Open Menu"}
//                   className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
//                 >
//                   <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
//                   <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
//                 </button>
//               </div>

//               <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
//                 <div className="lg:pr-4">
//                   <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
//                     {menuItems.map((item, index) => (
//                       <li key={index}>
//                         <Link
//                           href={item.href}
//                           className="text-muted-foreground hover:text-accent-foreground block duration-150"
//                         >
//                           <span>{item.name}</span>
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="flex w-full items-center space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:pl-6">
//                   <Button onClick={handleLoginClick} size="sm">
//                     <span>Login</span>
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//       <main className="overflow-hidden">
//         <section className="relative">
//           <div className="relative py-24 lg:py-28">
//             <div className="mx-auto max-w-7xl px-6 md:px-12">
//               <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
//                 <h1 className="mt-8 text-4xl font-semibold md:text-5xl xl:text-5xl xl:[line-height:1.125]">
//                   Smart Parking System with Automatic Number Plate Recognition
//                 </h1>
//                 <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block">
//                   A modern solution for residential parking that identifies
//                   vehicles, assigns parking spots, and detects vehicle
//                   types—automatically.
//                 </p>

//                 <div className="mt-8">
//                   <Button size="lg" asChild>
//                     <Link href="#">
//                       <ImageUp className="relative size-6" />
//                       <span className="text-nowrap">
//                         Upload Number Plate Image
//                       </span>
//                     </Link>
//                   </Button>
//                 </div>
//               </div>
//               <div className="x-auto relative mx-auto mt-8 max-w-lg sm:mt-12">
//                 <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)] dark:opacity-10"></div>
//                 <div className="absolute inset-x-0 top-12 -z-[1] mx-auto h-1/3 w-2/3 rounded-full bg-blue-300 blur-3xl dark:bg-white/20"></div>

//                 <Swiper
//                   slidesPerView={1}
//                   pagination={{ clickable: true }}
//                   loop
//                   autoplay={{ delay: 1000 }}
//                   modules={[Autoplay, EffectCoverflow]}
//                 >
//                   <SwiperSlide className="px-2">
//                     <div className="bg-background rounded-(--radius) h-44 max-w-lg border p-9">
//                       <div className="flex justify-center items-center w-full">
//                         <Bot className="h-10 w-10" />
//                       </div>
//                       <p className="mt-6 text-center text-lg font-medium">
//                         Fully Automated Workflow
//                       </p>
//                     </div>
//                   </SwiperSlide>
//                   <SwiperSlide className="px-2">
//                     <div className="bg-background rounded-(--radius) h-44 max-w-lg border p-9">
//                       <div className="flex justify-center items-center w-full">
//                         <ScanSearch className="h-8 w-10" />
//                       </div>
//                       <p className="mt-6 text-center text-lg font-medium">
//                         Real-Time Number Plate Recognition
//                       </p>
//                     </div>
//                   </SwiperSlide>
//                   <SwiperSlide className="px-2">
//                     <div className="bg-background rounded-(--radius) h-44 max-w-lg border p-9">
//                       <div className="flex justify-center items-center w-full">
//                         <BadgeCheckIcon className="h-10 w-10" />
//                       </div>
//                       <p className="mt-6 text-center text-lg font-medium">
//                         Indian Number Plate Standards Support
//                       </p>
//                     </div>
//                   </SwiperSlide>
//                   <SwiperSlide className="px-2">
//                     <div className="bg-background rounded-(--radius) h-44 max-w-lg border p-9">
//                       <div className="flex justify-center items-center w-full">
//                         <PaletteIcon className="h-10 w-10" />
//                       </div>
//                       <p className="mt-6 text-center text-lg font-medium">
//                         Color-Based Vehicle Type Identification
//                       </p>
//                     </div>
//                   </SwiperSlide>
//                   <SwiperSlide className="px-2">
//                     <div className="bg-background rounded-(--radius) h-44 max-w-lg border p-9">
//                       <div className="flex justify-center items-center w-full">
//                         <ParkingCircleIcon className="h-10 w-10" />
//                       </div>
//                       <p className="mt-6 text-center text-lg font-medium">
//                         Dedicated Apartment Parking Allocation
//                       </p>
//                     </div>
//                   </SwiperSlide>
//                 </Swiper>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

// components/hero-section.tsx
"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  ImageUp,
  X,
  Bot,
  ScanSearch,
  BadgeCheckIcon,
  PaletteIcon,
  ParkingCircleIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "", href: "#" },
  { name: "", href: "#" },
  { name: "", href: "#" },
  { name: "", href: "#" },
];

export default function HeroSection() {
  const [menuState, setMenuState] = React.useState(false);
  // Removed unused selectedFile state
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Navigate to image-classifier page with the file name as a query parameter
      router.push(`/image-classifier?filename=${encodeURIComponent(e.target.files[0].name)}`);
    }
  };

  const handleUploadButtonClick = () => {
    // Trigger the hidden file input when the button is clicked
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <header>
        <nav
          data-state={menuState && "active"}
          className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
        >
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2"
                ></Link>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>

              <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full items-center space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:pl-6">
                  <Button onClick={handleLoginClick} size="sm" className="cursor-pointer">
                    <span>Login</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="overflow-hidden">
        <section className="relative">
          <div className="relative py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
              <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                <h1 className="mt-8 text-4xl font-semibold md:text-5xl xl:text-5xl xl:[line-height:1.125]">
                  Smart Parking System with Automatic Number Plate Recognition
                </h1>
                <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block">
                  A modern solution for residential parking that identifies
                  vehicles, assigns parking spots, and detects vehicle
                  types—automatically.
                </p>

                <div className="mt-8">
                  {/* Hidden file input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileInputChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <Button size="lg" onClick={handleUploadButtonClick}>
                    <ImageUp className="relative size-6" />
                    <span className="text-nowrap cursor-pointer">
                      Upload Number Plate Image
                    </span>
                  </Button>
                </div>
              </div>
              <div className="x-auto relative mx-auto mt-8 max-w-lg sm:mt-12">
                <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)] dark:opacity-10"></div>
                <div className="absolute inset-x-0 top-12 -z-[1] mx-auto h-1/3 w-2/3 rounded-full bg-blue-300 blur-3xl dark:bg-white/20"></div>

                <Swiper
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  loop
                  autoplay={{ delay: 2000 }}
                  modules={[Autoplay, EffectCoverflow]}
                >
                  <SwiperSlide className="px-2">
                    <div className="bg-background rounded-(--radius) h-44 max-w-lg border p-9">
                      <div className="flex justify-center items-center w-full">
                        <Bot className="h-10 w-10" />
                      </div>
                      <p className="mt-6 text-center text-lg font-medium">
                        Fully Automated Workflow
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="px-2">
                    <div className="bg-background rounded-(--radius) h-44 max-w-lg border p-9">
                      <div className="flex justify-center items-center w-full">
                        <ScanSearch className="h-8 w-10" />
                      </div>
                      <p className="mt-6 text-center text-lg font-medium">
                        Real-Time Number Plate Recognition
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="px-2">
                    <div className="bg-background rounded-(--radius) h-44 max-w-lg border p-9">
                      <div className="flex justify-center items-center w-full">
                        <BadgeCheckIcon className="h-10 w-10" />
                      </div>
                      <p className="mt-6 text-center text-lg font-medium">
                        Indian Number Plate Standards Support
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="px-2">
                    <div className="bg-background rounded-(--radius) h-44 max-w-lg border p-9">
                      <div className="flex justify-center items-center w-full">
                        <PaletteIcon className="h-10 w-10" />
                      </div>
                      <p className="mt-6 text-center text-lg font-medium">
                        Color-Based Vehicle Type Identification
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="px-2">
                    <div className="bg-background rounded-(--radius) h-44 max-w-lg border p-9">
                      <div className="flex justify-center items-center w-full">
                        <ParkingCircleIcon className="h-10 w-10" />
                      </div>
                      <p className="mt-6 text-center text-lg font-medium">
                        Dedicated Apartment Parking Allocation
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}