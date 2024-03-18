import Image from "next/image";
import Header from "./Header";
import ServiceList from "./ServiceList";
import Pricing from "./Pricing";

export default function Home() {
  return (
    <main className="justify-between p-1">
  <Header />
  <div className="bg-slate-900">
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"></div>
      <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-300 sm:text-6xl">En Motion</h1>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Providing businesses with health and team building activities to promote a strong and cohesive work environment.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Get Started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-slate-300">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-emerald-600 py-10 sm:py-10">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-emerald-200">Build a Stronger Team</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Enhance teamwork and wellness with our services</p>
        <p className="mt-6 text-lg leading-8 text-emerald-200">
          Our company offers a range of health and team building activities to promote a positive work environment and boost employee morale.
        </p>
      </div>
      <ServiceList />
    </div>
  </div>
  <div className="bg-slate-800 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-4xl sm:text-center">
        <h2 className="text-base font-semibold leading-7 text-emerald-600">Choose the Right Plan for Your Team</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-slate-300 sm:text-5xl">Flexible Pricing Options</p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400 sm:text-center">
        Select the plan that best fits the needs and budget of your team.
      </p>
      <Pricing />
    </div>
  </div>
  <div className="bg-emerald-600">
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Experience the Power of Team Building Through Fun Activities and Fitness Classes
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-emerald-200">
          Join us in promoting a healthy and cohesive work environment with our personalized health and team building services. Our experienced staff is dedicated to helping your team thrive.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-emerald-600 shadow-sm hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get Started Today
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Learn More <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</main>



  );
}
