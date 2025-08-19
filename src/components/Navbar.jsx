import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto p-3 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <img
        src="https://i.pinimg.com/736x/14/b9/0b/14b90bb343e8fe8b928dece37985a832.jpg"
        className="h-12"
        alt=""
      />
      <div className="links flex gap-14 ml-20">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
          elem.length === 0 ? (
            <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
          ) : (
            <a key={index} className="text-sm flex items-center gap-1" href="#">
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.45em #00FF19" }}
                  className="inline-block w-1 h-1 rounded-full bg-green-500"
                ></span>
              )}
              {elem}
            </a>
          )
        )}
      </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
