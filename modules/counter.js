const getCount = async (meals, num) => {
  meals.splice(num);
  const listCount = meals.length;
  return listCount;
};

module.exports = getCount;
