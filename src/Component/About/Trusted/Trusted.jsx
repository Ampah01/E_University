import React from "react";
import trustImage1 from "../../../assets/trust9.png"; 
import trustImage2 from "../../../assets/trust2.png"; 
import trustImage3 from "../../../assets/trust7.png"; 
import trustImage4 from "../../../assets/trust3.png"; 
import trustImage5 from "../../../assets/trust5.png"; 
import trustImage6 from "../../../assets/trust6.png"; 

const Trusted = () => {
  return (
    <section className="trusted pb-12 bg-slate-100 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Trusted By</h1>
      <p className="text-gray-600 mb-8">
        Replenish man have thing gathering lights yielding shall you
      </p>
      
      <div className="trusted-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center items-center px-4">
        <div className="trust-container">
          <img className="trust-image w-full object-contain h-24" src={trustImage1} alt="Trust 1" />
        </div>
        <div className="trust-container">
          <img className="trust-image w-full object-contain h-24" src={trustImage2} alt="Trust 2" />
        </div>
        <div className="trust-container">
          <img className="trust-image w-full object-contain h-24" src={trustImage3} alt="Trust 3" />
        </div>
        <div className="trust-container">
          <img className="trust-image w-full object-contain h-24" src={trustImage4} alt="Trust 4" />
        </div>
        <div className="trust-container">
          <img className="trust-image w-full object-contain h-24" src={trustImage5} alt="Trust 5" />
        </div>
        <div className="trust-container">
          <img className="trust-image w-full object-contain h-24" src={trustImage6} alt="Trust 6" />
        </div>
      </div>
    </section>
  );
};

export default Trusted;
