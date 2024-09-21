import React from "react";
import trustImage1 from "../../../assets/trust9.png";
import trustImage2 from "../../../assets/trust2.png";
import trustImage3 from "../../../assets/trust7.png";
import trustImage4 from "../../../assets/trust3.png";
import trustImage5 from "../../../assets/trust5.png";
import trustImage6 from "../../../assets/trust6.png";

const Trusted = () => {
  return (
    <section className="pb-12 bg-slate-100 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Trusted By</h1>
      <p className="text-gray-700 mb-8">
        Trusted by leading organizations and professionals across various
        industries for quality and excellence.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center items-center px-4">
        <div>
          <img
            className="w-full object-contain h-24"
            src={trustImage1}
            alt="Trust 1"
          />
        </div>
        <div>
          <img
            className="w-full object-contain h-24"
            src={trustImage2}
            alt="Trust 2"
          />
        </div>
        <div>
          <img
            className="w-full object-contain h-24"
            src={trustImage3}
            alt="Trust 3"
          />
        </div>
        <div>
          <img
            className="w-full object-contain h-24"
            src={trustImage4}
            alt="Trust 4"
          />
        </div>
        <div>
          <img
            className="w-full object-contain h-24"
            src={trustImage5}
            alt="Trust 5"
          />
        </div>
        <div>
          <img
            className="w-full object-contain h-24"
            src={trustImage6}
            alt="Trust 6"
          />
        </div>
      </div>
    </section>
  );
};

export default Trusted;
