// // components/Hero.js

// import Link from "next/link";

// export default function Hero() {
//     return (
//       <section className="p-8 relative bg-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
//           {/* Left Content */}
//           <div className="lg:w-1/2 text-center lg:text-left py-12 lg:py-0">
//             <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
//               Discover the Best Deals <br />
//               <span className="text-blue-600">Shop Your Favorites</span>
//             </h1>
//             <p className="mt-4 text-gray-700 text-lg">
//               Unbeatable prices on the latest products. Shop now and enjoy exclusive discounts on your favorite items.
//             </p>
//             <div className="mt-6 flex justify-center lg:justify-start space-x-4">
//               <Link
//                 href="/"
//                 className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
//               >
//                 Shop Now
//               </Link>
//               <a
//                 href="#learn-more"
//                 className="px-6 py-3 bg-gray-300 text-gray-900 font-semibold rounded-md shadow hover:bg-gray-400 transition"
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>
  
//           {/* Right Image */}
//           <div className="lg:w-1/2 flex justify-center">
//             <img
//               src="/DALLE2024-12-2808.28.51-Ahigh-quality3DillustrationofaneCommerceherosectionwithnobackground.Thesceneincludes3DtypographywithaheadlinereadingDiscoverAma-ezgif.com-crop-removebg-preview.png" // Replace with your image path
//               alt="Shopping Illustration"
//               className="bg-none block max-w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
  
//         {/* Decorative Background Shapes */}
//         <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full opacity-30 blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-500 rounded-full opacity-30 blur-3xl"></div>
//       </section>
//     );
//   }
  
export default function Hero() {
    return (
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/jamni.jpg')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Welcome to <span className="text-blue-500">ShopZone</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl">
            Explore our exclusive collection of products. Find the best deals for your favorites today!
          </p>
          <div className="mt-8 flex space-x-4">
            <a
              href="#shop-now"
              className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Shop Now
            </a>
            <a
              href="#categories"
              className="px-6 py-3 bg-gray-100 text-gray-900 text-lg font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
            >
              Browse Categories
            </a>
          </div>
        </div>
      </section>
    );
  }