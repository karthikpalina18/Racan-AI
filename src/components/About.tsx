import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#EEFFC1]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center ml-[0rem] sm:ml-0 md:ml-[2.6rem]">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#004AAD] font-semibold mb-6 font-manrope">
                About Racan AI
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-8">
                <span className="font-normal text-[#004AAD]">Racan AI</span> is
                a revolutionary fashion assistant that combines artificial
                intelligence with e-commerce to transform your shopping
                experience. Our platform understands your unique style
                preferences, body type, and fashion needs to provide
                personalized recommendations.
              </p>

              <a
                href="#"
                className="inline-block bg-[#004AAD] text-white px-8 py-4 rounded-full hover:bg-[#d70153] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Learn More
              </a>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative w-full max-w-[455px] h-[600px] sm:h-[560px] md:h-[600px] mx-auto overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <img
                  src="https://s3-alpha-sig.figma.com/img/879f/2437/57e2ef18893781cb5fc1db455bb38206?Expires=1749427200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AE8cvbfIMWjC1g0FZMG-O~6HrxtoPOST8dbmu~SF~wNYiaA86u-dRWxD1Ggnup3lQdye5MdmaWTtcONEXqUPJ0UmliyCPvCnxfPmahwooq4xR1ODgmW7xMj7YbqrxAyVri-6hLATiSpHmJhcpp7sZQH2Nes9Sw6eHqOBsi7NBAEJbPtXl~DmKw-wmUBgFK1j2Ri0ELemuKnqmsLbcTLgKv1pSodds~Ont6NgCbxDsWuL9WmxVyTfTRTw-BKymTlNIQPwb3h08HNzfmsUMor1xCONIaRkOl1~i9BYTCoOJ25PoKetA8e3GMq0WIzq8ZzBRFptbzM2XPcBxI7XL9aNuA__"
                  alt="Racan AI Feature"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#004AAD]/20 to-[#973cff]/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
