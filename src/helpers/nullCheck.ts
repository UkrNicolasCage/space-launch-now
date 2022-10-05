export const nullCheck = <T>(value: T|null, replacer: T) => {
  return value === null? replacer as T: value;
};