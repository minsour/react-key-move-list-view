enum VIEW_TYPE {
  SLIDE = 'slide',
  MATRIX = 'matrix'
}
interface IViewState {
  current: number,
  action: boolean
}
export {
  VIEW_TYPE,
  IViewState
}