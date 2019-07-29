import { RefObject } from "react";

interface ICurrent {
  x: number,
  y: number
};

interface IFocusBox {
  ref: RefObject<HTMLDivElement>,
  offsetWidth: number,
  offsetHeight: number
};

interface IViewState {
  current: number,
  action: boolean
}

export {
  ICurrent,
  IFocusBox,
  IViewState,
}