import "./App.css";
import yo from "./assets/yo.jpeg";
import pc_emoji from "./assets/pc_emoji.png";
import pepsico from "./assets/pepsico.png";

function App() {
  return (
    <div className="m-3.5">
      <div className="flex gap-4">
        <div className="  w-1/3 h-fit">
          <div className="flex gap-4">
            <div className=" my-4 ml-4  w-1/3 h-1/3">
              <img
                src={yo}
                className="rounded-full w-40 h-40 object-cover"
                alt="My Image"
              />
            </div>
            <div className="flex flex-col items-center justify-center  my-4 mr-4  w-2/3 h-32">
              <h1 className="font-roboto text-5xl font-medium text-gray-900">
                Alan Cervantes is a SDE{" "}
                <img src={pc_emoji} className="inline-block w-10 h-10 ml-2" />
              </h1>
              <p className="text-left w-full  text-gray-500 ">
                and sometimes take photographs...
              </p>
            </div>
          </div>
          <div className=" my-4 m-4 ">
            <p>
              Currently → PepsiCo{" "}
              <img src={pepsico} className="inline-block   ml-2" />
            </p>
            <p>alangibrancs@icloud.com</p>
            <p>CDMX • MX</p>
          </div>
        </div>
        <div className="  grid grid-cols-4 gap-5 p-4  w-2/3">
          {/* Primera fila */}
          <div className=" rounded-3xl border-2 border-gray-300 w-full aspect-square"></div>
          <div className=" rounded-3xl border-2 border-gray-300 w-full aspect-square"></div>
          <div className=" rounded-3xl border-2 border-gray-300 w-full aspect-square"></div>
          <div className=" rounded-3xl border-2  border-gray-300 w-full aspect-square"></div>

          {/* Segunda fila */}
          <div className="col-span-2  rounded-3xl border-2 border-gray-300 w-full h-40"></div>
          <div className="col-span-2  rounded-3xl border-2 border-gray-300 w-full h-40"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
