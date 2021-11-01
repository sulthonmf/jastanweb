/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

export default function Profile() {
  return (
    <div className="py-12 bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-200 font-semibold tracking-wide uppercase">
            Profil Perusahaan
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-300 sm:text-4xl">
            PT Asuransi Jasa Tania Tbk
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-100 lg:mx-auto">
            Asuransi Jastan menyajikan berbagai jenis produk Asuransi Standar
            diantaranya Asuransi Kebakaran, Kendaraan Bermotor, Rekayasa,
            Pengangkutan Barang, Surety Bond, Miscellaneous, dan Kesehatan.
            Asuransi Jastan juga menyajikan produk Pengembangan seperti Asuransi
            JT Oto, JT Griya, Ternak, Tanaman Perkebunan, Askes JT Care Cash
            Plan, Askes JT Care Micro, dan Tanggung Gugat Pelayanan Kesehatan
            Rumah Sakit.
          </p>
        </div>
      </div>
    </div>
  );
}
