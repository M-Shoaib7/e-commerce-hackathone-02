import React from 'react';

const Edit = () => {
  return (
    <section>
      {/* Editor section start */}
      <section className="w-full bg-[#FAFAFA] py-10">
        <div className="text-center">
          <h3 className="text-[#252B42] font-bold text-2xl sm:text-3xl">
            EDITOR’S PICK
          </h3>
          <p className="text-[#737373] font-normal text-base sm:text-lg mt-3">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-6 md:px-16">
          {/* Card 1 */}
          <div
            className="w-full h-[400px] bg-cover bg-center relative"
            style={{ backgroundImage: "url(/home-page/edit-01.jpg)" }}
          >
            <button className="absolute bottom-4 left-4 bg-white text-[#252B42] font-bold text-sm py-2 px-4">
              MAN
            </button>
          </div>

          {/* Card 2 */}
          <div
            className="w-full h-[400px] bg-cover bg-center relative"
            style={{ backgroundImage: "url(/home-page/edit-02.jpg)" }}
          >
            <button className="absolute bottom-4 left-4 bg-white text-[#252B42] font-bold text-sm py-2 px-4">
              WOMAN
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-4">
            <div
              className="w-full h-[195px] bg-cover bg-center relative"
              style={{ backgroundImage: "url(/home-page/edit-03.jpg)" }}
            >
              <button className="absolute bottom-4 left-4 bg-white text-[#252B42] font-bold text-sm py-2 px-4">
                ACCESSORIES
              </button>
            </div>
            <div
              className="w-full h-[195px] bg-cover bg-center relative"
              style={{ backgroundImage: "url(/home-page/edit-04.jpg)" }}
            >
              <button className="absolute bottom-4 left-4 bg-white text-[#252B42] font-bold text-sm py-2 px-4">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Editor section end */}
    </section>
  );
};

export default Edit;
