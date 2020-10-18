let id = parseInt(window.localStorage.getItem('id') || '0');
const createId = () => {
  id++;
  window.localStorage.setItem('id', JSON.stringify(id));
  return id;
};
export {createId};