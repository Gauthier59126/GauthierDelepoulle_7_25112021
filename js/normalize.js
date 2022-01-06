// pour les caractères spéciaux
export default (text) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
