export const getFormatDate = formatDate => {
  console.log(formatDate);

  const arrData = formatDate.split('-');

  return arrData[0].length < 3 ? arrData.reverse().join('-') : formatDate;
};
