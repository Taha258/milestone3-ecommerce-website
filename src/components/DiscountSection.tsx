// components/DiscountSection.js

export default function DiscountSection() {
    return (
      <section className="mt-10 relative bg-cover bg-center bg-no-repeat py-20 px-6 object-top" style={{ backgroundImage: 'url(/dicont.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Limited Time Offer!
          </h2>
          <p className="text-2xl md:text-3xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
            Get <span className="text-yellow-400">50% Off</span> on Your First Purchase
          </p>
          <p className="text-lg md:text-xl mb-8 animate__animated animate__fadeIn animate__delay-3s">
            Don't miss out. Shop now before it's too late!
          </p>
          <a
            href="#shop-now"
            className="inline-block bg-yellow-400 text-gray-800 px-10 py-4 text-xl font-bold rounded-full shadow-lg transform transition-all hover:bg-yellow-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-4s"
          >
            Shop Now
          </a>
        </div>
      </section>
    );
  }
  