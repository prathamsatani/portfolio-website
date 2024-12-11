import { PinContainer } from "@/components/ui/3d-pin";

export default function Project() {
  return (
    <>
      <div className="w-full bg-white py-20" id="education">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 pb-20">
            🧑‍💻 Projects
          </h1>
        </div>
        <div className="w-full">
          <PinContainer
            title="/krishimitra.up.railway.app"
            href="https://twitter.com/mannupaaji"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[50rem] h-[20rem] ">
             <div className="flex space-x-7">
              <div className="flex flex-1 h-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 w-[50%]" />
              <div>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Aceternity UI
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Customizable Tailwind CSS and Framer Motion Components.
                  </span>
                </div>
              </div>
             </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </>
  );
}
