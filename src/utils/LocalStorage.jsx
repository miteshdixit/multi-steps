
export const saveData = (data) => {
  localStorage.setItem('formData', JSON.stringify(data));
};

export const loadData = () => {
  const data = localStorage.getItem('formData');
  return data ? JSON.parse(data) : null;
};
