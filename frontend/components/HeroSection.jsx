"use client";
import { LucideChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function HeroSectionLight() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-15">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="h-11"
          />
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm/6 font-semibold text-indigo-600 ring-1 ring-indigo-600/10 ring-inset">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600">
                <span>Just shipped v1.0</span>
                <LucideChevronRight
                  aria-hidden="true"
                  className="size-5 text-gray-400"
                />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
            Deploy to the cloud with confidence
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                alt="App screenshot"
                src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md ring-1 shadow-2xl ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSectionDark() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="aspect-1108/632 w-[69.25rem] bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-15">
        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="h-11"
          />
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm/6 font-semibold text-indigo-400 ring-1 ring-indigo-500/20 ring-inset">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-300">
                <span>Just shipped v1.0</span>
                <LucideChevronRight
                  aria-hidden="true"
                  className="size-5 text-gray-500"
                />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl">
            Save the legendary memories with the boys
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get started
            </a>
            <a href="#" className="text-sm/6 font-semibold text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              alt="App screenshot"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 ring-1 shadow-2xl ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted &&
    (resolvedTheme === "dark" ? <HeroSectionDark /> : <HeroSectionLight />)
  );
}
