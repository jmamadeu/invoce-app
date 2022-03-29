export const breakNameIntoInitials = (name: string) => {
  if (!name.length) return "";

  const nameSplitted = name.split(" ");

  return `${nameSplitted[0][0]}${nameSplitted[nameSplitted.length - 1][0]}`;
};
