export const formatDate = (date) => {
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth() + 1;
  const year = new Date(date).getFullYear();
  return `${day}/${month}/${year}`;
}

export const prettifyText = (text) => {
  text = String(text);
  text = text.replaceAll('_', ' ').trim();
  text = text.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  text = (text === 'Tarjeta De Identidad') ? 'TI' : text;
  text = (text === 'Cedula De Ciudadania') ? 'CC' : text;
  return text;
}
