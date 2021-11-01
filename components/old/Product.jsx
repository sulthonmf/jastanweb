import React from "react";
import Card from "./Card";

function Product() {
  return (
    <div className="py-12 bg-gradient-to-r from-blue-100 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-left">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Temukan Produk Kami Sesuai Kebutuhan Anda
          </p>
          <p className="mt-4 max-w-2xl text-xl text-black">
            Kami memberikan setiap solusi dari kebutuhan anda. Dimulai dari asuransi kebakaran, Asuransi gempa bumi, Dan produk kami lainnya.
          </p>
        </div>

        <div className="lg:mt-10 mx-10">
            <Card/>
        </div>
      </div>
    </div>
  );
}

export default Product;
