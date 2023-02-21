import Accordion from "./Accordion"

import icon_close from "../assets/icon_close.svg";
import icon_copper from "../assets/icon_copper.svg";
import icon_pipedrive from "../assets/icon_pipedrive.svg";
import icon_salesforce from "../assets/icon_salesforce.svg";
import icon_hubspot from "../assets/icon_hubspot.svg";
import icon_youtube from "../assets/icon_youtube.svg";
import icon_arrow from "../assets/icon_arrow.svg";

function Modal() {
  const showSelection = (selection) => {
    console.log(selection+" selected")
  }

  return (
    <div className="fixed inset-0 overflow-y-auto z-30">
      <div className="flex inset-0 min-h-screen justify-center items-center bg-black">
        <div className="h-auto w-[40rem] bg-white rounded-2xl leading-8 text-neutral-800">
          <div className="flex justify-center items-center w-full px-10 mt-10">
            <div className="flex-1 text-center text-2xl font-medium">
              Extension
            </div>
            <div className="flex-none cursor-pointer">
              <img src={icon_close} alt="icon_close" />
            </div>
          </div>
          <div className="flex w-full justify-between items-center mt-12 px-10">
            <button className="bg-white w-32 h-40 p-5 rounded-xl hover:drop-shadow-2xl hover:text-cyan-450" onClick={() => showSelection("Hubspot")}>
              <div className="flex flex-col">
                <img className="w-2- h-20" src={icon_hubspot} alt="icon_hubspot" />
                <label htmlFor="icon_hubspot" className="mt-4 cursor-pointer">
                  Hubspot
                </label>
              </div>
            </button>
            <button className="bg-white w-32 h-40 p-5 rounded-xl hover:drop-shadow-2xl hover:text-cyan-450"onClick={() => showSelection("Salesforce")}>
              <div className="flex flex-col">
                <img className="w-2- h-20" src={icon_salesforce} alt="icon_salesforce" />
                <label htmlFor="icon_salesforce" className="mt-4 cursor-pointer">
                  Salesforce
                </label>
              </div>
            </button>
            <button className="bg-white w-32 h-40 p-5 rounded-xl hover:drop-shadow-2xl hover:text-cyan-450"onClick={() => showSelection("Pipedrive")}>
              <div className="flex flex-col">
                <img className="w-2- h-20" src={icon_pipedrive} alt="icon_pipedrive" />
                <label htmlFor="icon_popedrive" className="mt-4 cursor-pointer">
                  Pipedrive
                </label>
              </div>
            </button>
            <button className="bg-white w-32 h-40 p-5 rounded-xl hover:drop-shadow-2xl hover:text-cyan-450"onClick={() => showSelection("Copper")}>
              <div className="flex flex-col">
                <img className="w-2- h-20" src={icon_copper} alt="icon_copper" />
                <label htmlFor="icon_copper" className="mt-4 cursor-pointer">
                  Copper
                </label>
              </div>
            </button>
          </div>
          <div className="w-full text-center text-4xl font-semibold mt-10">
            Pick your favorite CRM
          </div>
          <button className="w-full flex justify-center mt-8">
            <div className="flex border-[1.5px] border-cyan-450 rounded-xl text-cyan-450 py-2 px-3 w-80">
              <img
                className="flex-none"
                src={icon_youtube}
                alt="icon_youtube"
              />
              <div className="flex-1 text-center font-medium">
                Watch Extension in action
              </div>
              <img className="flex-none" src={icon_arrow} alt="icon_arrow" />
            </div>
          </button>
          <div className="w-full h-hull mt-12 bg-gray-250 rounded-b-2xl px-10 py-9">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
