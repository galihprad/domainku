import React, { useEffect } from "react";
import { dataPaketExample } from "./dataPaketExample";

export default function PackageSection() {
  // NOTE : This is simulation of fetching data
  useEffect(() => {
    function getDataPaket() {
      fetch("http://example.com/").then((res) => {
        console.log(res);
      });
    }
    getDataPaket();
  }, []);

  return (
    <div className="packageSection">
      {dataPaketExample.map((item) => {
        return (
          <div className="packageBox" key={item.title}>
            <div className="packageTitle">{item.title}</div>
            <div className="packagePrice">Rp {item.price}/month</div>
            <div className="packageBody">
              {item.feature.map((feat) => {
                return <div key={feat}>{feat}</div>;
              })}
            </div>
            <div className="orderButton">Order Now</div>
          </div>
        );
      })}
    </div>
  );
}
