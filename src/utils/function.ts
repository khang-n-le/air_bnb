export const ConvertDateToVNDate = (data: string) => {
  const date = new Date(data);

  if (isNaN(date?.getDate())) {
    var dateParts = data.split('/');

    return `Ngày ${+dateParts[0]} Tháng ${Number(dateParts[1])} Năm  ${
      dateParts[2]
    }`;
  } else {
    return `Ngày ${date.getDate()} Tháng ${
      date.getMonth() + 1
    } Năm ${date.getFullYear()}`;
  }
};
