interface IContent {
  _id: string;
  index: number;
  image: string;
  title: string;
  description: string;
}
interface ICurrentContent {
  x: number,
  y: number
}

export {
  IContent,
  ICurrentContent
}