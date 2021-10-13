export const upperSnakeCaseToKebabCase = (string) =>
  string.toLowerCase().replace(/_/g, "-");

export const kebabCaseToUpperSnakeCase = (string) =>
  string.toUpperCase().replace(/-/g, "_");

export const formatPrice = (price) =>
  (price / 100).toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });

const formatStringToDate = (string) => {
  return new Date(string);
};

export const formatDateTime = (date) => {
  new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(date);
};

export const formatDate = (string) => {
  const date = formatStringToDate(string);

  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export const formatMonth = (date) =>
  new Intl.DateTimeFormat("en-GB", {
    month: "long",
  }).format(date);
