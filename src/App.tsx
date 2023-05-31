import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { GateFiDisplayModeEnum } from '@gatefi/js-sdk';
import * as gateFiSDK from "@gatefi/js-sdk"

function App() {

  useEffect(()=>{
    const overlayInstance = new gateFiSDK.GateFiSDK({
      // sample-merchant-id
      merchantId: "76555590-c3c7-4608-8f25-37165c3f5fee",
      displayMode: GateFiDisplayModeEnum.Overlay,
      nodeSelector: "#overlay-button"
    })
    overlayInstance.subscribe(gateFiSDK.GateFiEventTypes.onLoad, (type, payload) => {console.log(type, payload)});
  },[])
  return (
    <div className="App">
      <header className="App-header">
    <button id="overlay-button"></button>
      </header>
    </div>
  );
}

export default App;
