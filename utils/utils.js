export function getDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const trunc = (text, limit) =>
  text.length > limit ? `${text.substring(0, limit)}...` : text;
