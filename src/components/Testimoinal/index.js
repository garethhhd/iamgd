import React from "react";

export const Testimoinal = () => {
  return (
    <section>
      <div className="relative lg:flex lg:items-center">
        <div className="hidden lg:block lg:flex-shrink-0">
          <img
            className="w-64 h-64 rounded-full xl:h-80 xl:w-80"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>

        <div className="relative lg:ml-10">
          <blockquote className="relative">
            <div className="text-2xl font-medium leading-9">
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis."
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex">
                <div className="flex-shrink-0 lg:hidden">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-4 lg:ml-0">
                  <div className="text-base font-medium text-gray-100">
                    Jordan
                  </div>
                  <div className="text-base font-medium text-gray-100">
                    Nocturne
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
