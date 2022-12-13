export type Shape = {
  form: string;
  color: string;
  dark: boolean;
};

type GetShapesResponse = Array<Shape>;

export const getShapes = async (): Promise<GetShapesResponse> => {
  const res = await fetch(`http://localhost:8001/shapes`);
  return (await res.json()) as Promise<GetShapesResponse>;
};
