import React from 'react';

const Pricing = () => {
  return (
    <div className="mt-20 flow-root">
      <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-slate-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
        <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
          <h3 className="text-base font-semibold leading-7 text-slate-900">Starter Plan</h3>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-5xl font-bold tracking-tight text-slate-900">$100</span>
            <span className="text-sm font-semibold leading-6 text-slate-600">/per event</span>
          </p>
          <a
            href="#"
            className="mt-10 block rounded-md bg-emerald-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Get started
          </a>
          <p className="mt-10 text-sm font-semibold leading-6 text-slate-900">Ideal for small teams</p>
          {/* Pricing plan features */}
        </div>
        <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
          <h3 className="text-base font-semibold leading-7 text-slate-900">Business Plan</h3>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-5xl font-bold tracking-tight text-slate-900">$250</span>
            <span className="text-sm font-semibold leading-6 text-slate-600">/per event</span>
          </p>
          <a
            href="#"
            className="mt-10 block rounded-md bg-emerald-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Get started
          </a>
          <p className="mt-10 text-sm font-semibold leading-6 text-slate-900">Great for medium-sized teams</p>
          {/* Pricing plan features */}
        </div>
        <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
          <h3 className="text-base font-semibold leading-7 text-slate-900">Enterprise Plan</h3>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-5xl font-bold tracking-tight text-slate-900">$500</span>
            <span className="text-sm font-semibold leading-6 text-slate-600">/per event</span>
          </p>
          <a
            href="#"
            className="mt-10 block rounded-md bg-emerald-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Get started
          </a>
          <p className="mt-10 text-sm font-semibold leading-6 text-slate-900">Perfect for large corporations</p>
          {/* Pricing plan features */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;