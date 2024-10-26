const getCurrentMonth = () => {
  const today = new Date();
  return `${today.getMonth() + 1}-${today.getFullYear()}`;
};

export default getCurrentMonth;
