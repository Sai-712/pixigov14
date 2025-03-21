import React from 'react';
import { Camera, Image, Upload, Search, Cloud, Lock } from 'lucide-react';



const Features = () => {
  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-base font-semibold leading-7 text-red-600">Sell photos to event participants</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              You can sell photos to event guests to generate revenue for your event
            </p>
            <div className="mt-6 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Liveliness Detection</h3>
                  <p className="text-gray-600">Advanced security features to ensure authentic photo uploads</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
                  <h3 className="text-xl font-semibold mb-4">Website Integration</h3>
                  <p className="text-gray-600">Seamlessly integrate photo galleries into your website</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
                  <h3 className="text-xl font-semibold mb-4">Branding & Promotions</h3>
                  <p className="text-gray-600">Customize your gallery with your brand elements</p>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="w-full max-w-md mx-auto bg-red-50 rounded-xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-32 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 bg-red-200 rounded w-1/4"></div>
                      <div className="h-4 bg-red-300 rounded w-1/3"></div>
                      <div className="h-4 bg-red-400 rounded w-1/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
       
                  

export default Features;