export function formatDate(date) {
  const newDate = new Date(date);
  const options = {
    weekday: "short",
    month: "short",
    year: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat(
    navigator.language,
    options
  ).format(newDate);
  return formattedDate;
}

export async function isApiError(res) {
  if (!res.ok) {
    new Error(`API error ${res.status}`);
  }
}
