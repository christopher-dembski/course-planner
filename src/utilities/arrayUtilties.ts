export const flattenArray = <T>(nestedArray: Array<Array<T>>): Array<T> => {
  return nestedArray.reduce(
    (flattened, subArray) => flattened.concat(subArray),
    [],
  );
};
