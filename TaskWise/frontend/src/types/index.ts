export type formaDataTypes = {
  description: string;
  _id?: string;
  title?: string;
  completed?: boolean;
};

// After
// export type formaDataTypes = {
//   description: string | undefined;
//   _id?: string;
//   title?: string | undefined; // Adjusted to allow undefined
//   completed?: boolean | undefined;
// };
