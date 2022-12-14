import React from "react";
import wikipediaLogo from "/wikipedia-logo.png";
import {
  ALLMUKAFATLARUSSR_POPUP as allMukafatlarUssr,
  ALLMUKAFATLAR_POPUP as allMukafatlar,
} from "../../consts";

function Popup(props) {
  // when i reference mukafatIndex as "all", just know that it means it'll trigger the popup with all of the achievments/mukafatlar
  //which reside above ussr and aze buttons
  return (
    <div
      className={`overflow-y-scroll fixed z-10 py-20 ${
        props.lightMode ? " bg-black/50 " : " bg-black/70 dark-scrollbar"
      } top-0 left-0 w-full h-full`}
    >
      <div
        className={`w-full  ${props.lightMode ? "dark  " : " "}    ${
          props.education ? "h-[1600px]" : "h-full"
        } sm:h-full  `}
      >
        <div className="flex  w-full h-full justify-center items-center">
          <div
            className={`relative    shadow-gray-600
         border-2 border-opacity-50  border-gray-600 shadow-md 
         max-w-screen-xl w-11/12  ${
           props.mukafatIndex === "all" ? "h-full" : "sm:h-full"
         } 
         rounded-md  bg-gradient-to-b 
          from-black/90 to-gray-800/90 dark:from-white/90 dark:to-gray-100/95`}
          >
            {props.mukafatIndex === "all" ? (
              <div className="h-full  w-full scrollbar dark:light-scrollbar    overflow-y-scroll flex items-center">
                <div className="mx-auto  my-auto p-24 ">
                  <div className=" flex text-4xl mb-10  font-semibold w-full">
                    <p className="border-b-gray-500 border-b-2">
                      {props.mukafatType === "azerbaijan"
                        ? "Müstəqillik dövrü"
                        : "SSRI dövrü"}
                    </p>
                  </div>
                  <ul className="text-left w-full list-disc	 ">
                    {props.mukafatType === "azerbaijan"
                      ? allMukafatlar.map((achievment) => {
                          return (
                            <li key={achievment.id} className="text-2xl mt-8">
                              {achievment.name}
                            </li>
                          );
                        })
                      : allMukafatlarUssr.map((achievment) => {
                          return (
                            <li key={achievment.id} className="text-2xl mt-8">
                              {achievment.name}
                            </li>
                          );
                        })}
                  </ul>
                </div>
              </div>
            ) : (
              <div className=" p-5 sm:p-10  w-full h-full  sm:ml-10 justify-center flex-wrap items-center  flex flex-col sm:flex-row">
                <>
                  <div className="flex  items-center   mb-10 sm:mb-0   w-1/4">
                    <img src={props.mukafatImg} />
                  </div>

                  <div className="flex  w-3/4 justify-center text-center  flex-wrap  items-center flex-col">
                    <p className="text-4xl  font-semibold ">
                      {props.mukafatName}
                    </p>
                    <br />
                    <p className="text-2xl mb-4 text-center  sm:w-5/6 ">
                      {props.mukafatSubTitle}
                    </p>

                    <p
                      className={`text-2xl ${
                        props.education ? "sm:w-10/12 mt-2 " : "sm:w-2/3"
                      }   `}
                    >
                      {props.mukafatMelumat}
                    </p>
                  </div>

                  <div
                    className="border-t-4   dark:border-t-gray-300 opacity-0 sm:opacity-100 absolute  bottom-0 left-0 
             border-t-gray-700 border-opacity-60  px-10 p-5 w-full"
                  >
                    <span className="font-semibold flex text-lg items-center">
                      {" "}
                      Vikipedia:{" "}
                      <a
                        href={props.wikiLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={wikipediaLogo}
                          className=" ml-2 cursor-pointer  h-6"
                        />
                      </a>
                    </span>
                  </div>
                </>
              </div>
            )}

            <p
              onClick={() => props.setShowPopUp(false)}
              className="text-3xl absolute z-2 top-0 right-0 mr-6 mt-4  hover:scale-110 cursor-pointer transition duration-300 active:scale-90"
            >
              x
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
