const formatDate = (currentDate) => {
  const newDate = new Date(currentDate);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return newDate.toLocaleDateString("es-ES", options);
};

export default formatDate;
