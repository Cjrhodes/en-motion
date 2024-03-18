import React from 'react';

const ServiceList = () => {
  return (
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        <div className="flex flex-col">
          <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">Organized Games</dt>
          <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-emerald-200">
            <p className="flex-auto">Engage in fun and interactive team building activities</p>
            <p className="mt-6">
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </p>
          </dd>
        </div>
        <div className="flex flex-col">
          <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">Fitness Classes</dt>
          <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-emerald-200">
            <p className="flex-auto">Stay active and healthy with our variety of fitness classes</p>
            <p className="mt-6">
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </p>
          </dd>
        </div>
        <div className="flex flex-col">
          <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">Personal Training</dt>
          <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-emerald-200">
            <p className="flex-auto">Receive personalized training to reach your fitness goals</p>
            <p className="mt-6">
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </p>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default ServiceList;