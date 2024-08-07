export default function formatDateTime(inputDateTime) {
  const date = new Date(inputDateTime);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear().toString().slice(-2);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const formattedDateTime = `${formattedDay}/${formattedMonth}/${year} at ${formattedHours}:${formattedMinutes}`;

  return formattedDateTime;
}
