const Index = () => (
    <div>
        <section className="pt-20 px-6 xl:px-0">
            <div className="mx-auto container">
                <div className="flex flex-col lg:items-center justify-center w-full">
                    <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">Produk dan Layanan</h1>
                    <p className="mt-2.5 lg:w-1/2 lg:text-center text-2xl">Kami adalah asuransi umum yang menyajikan berbagai jenis produk Asuransi diantaranya produk Asuransi Standar dan produk Asuransi Pengembangan.</p>
                </div>
                <div className="flex items-center justify-center w-full">
                    <div className="pt-10">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap mb-12 justify-between sm:justify-center -mx-6">
                                <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 mb-4 px-6">
                                    <div className="py-5 px-4 bg-blue-700 border border-gray-200 shadow rounded-lg text-left">
                                        <h4 className="text-xl text-white font-semibold pb-8">Produk Standar</h4>
                                        <ul className="flex flex-col mb-6">
                                            <li className="flex items-center mb-2.5">
                                                <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png" className="mr-4" alt="check-mark" />
                                                <p className="text-white text-base font-normal">Asuransi Kebakaran</p>
                                            </li>
                                            <li className="flex items-center mb-2.5">
                                                <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png" className="mr-4" alt="check-mark" />
                                                <p className="text-white text-base font-normal">Asuransi Gempa Bumi</p>
                                            </li>
                                            <li className="flex items-center mb-2.5">
                                                <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png" className="mr-4" alt="check-mark" />
                                                <p className="text-white text-base font-normal">Asuransi Surety Bond</p>
                                            </li>
                                            <li className="flex items-center mb-2.5">
                                                <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png" className="mr-4" alt="check-mark" />
                                                <p className="text-white text-base font-normal">Asuransi Kesehatan</p>
                                            </li>
                                            <li className="flex items-center mb-2.5">
                                                <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png" className="mr-4" alt="check-mark" />
                                                <p className="text-white text-base font-normal">Asuransi Kendaraan</p>
                                            </li>
                                        </ul>
                                        <button className="mt-5 w-full text-blue-700 focus:outline-none transition duration-150 ease-in-out rounded bg-white hover:bg-gray-100 px-8 py-3 text-base font-semibold py-3">Lihat Lainnya</button>
                                    </div>
                                </div>
                                <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 mb-4 px-6">
                                    <div className="py-5 px-4 bg-white border border-gray-200shadow rounded-lg text-left">
                                        <h4 className="text-xl text-blue-700 font-semibold pb-8">Produk Pengembangan</h4>
                                        <ul className="flex flex-col mb-6">
                                            <li className="flex items-center mb-2.5">
                                                <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" className="mr-4" alt="check-mark" />
                                                <p className="text-gray-800 text-base font-normal">Asuransi JT OTO</p>
                                            </li>
                                            <li className="flex items-center mb-2.5">
                                                <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" className="mr-4" alt="check-mark" />
                                                <p className="text-gray-800 text-base font-normal">Asuransi JT GRIYA</p>
                                            </li>
                                            <li className="flex items-center mb-2.5">
                                                <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" className="mr-4" alt="check-mark" />
                                                <p className="text-gray-800 text-base font-normal">Asuransi Ternak</p>
                                            </li>
                                            <li className="flex items-center mb-2.5">
                                                <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" className="mr-4" alt="check-mark" />
                                                <p className="text-gray-800 text-base font-normal">Asuransi Tanaman Perkebunan</p>
                                            </li>
                                            <li className="flex items-center mb-2.5">
                                                <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" className="mr-4" alt="check-mark" />
                                                <p className="text-gray-800 text-base font-normal">Asuransi JT CARE</p>
                                            </li>
                                        </ul>
                                        <button className="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-blue-700 px-8 py-3 text-base font-semibold py-3">Lihat Lainnya</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <style
                            dangerouslySetInnerHTML={{
                                __html: "",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>

        <style>
            {` 
            .checkbox:checked {
                right: 0;
                background-color: #4338ca;
            }
            `}
        </style>
    </div>
);
export default Index;
