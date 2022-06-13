const regexPatterns: any = {
  userId: /^[a-zA-Z0-9]{4,12}$/,
  password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/,
  phone: /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/,
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
  name: /^[가-힣a-zA-Z]{2,10}$/,
  korean: /^[가-힣]{2,10}$/,
  english: /^[a-zA-Z]{2,10}$/,
  number: /^[0-9]{2,10}$/,
  koreanNumber: /^[가-힣0-9]{2,10}$/,
  englishNumber: /^[a-zA-Z0-9]{2,10}$/,
};

const validateMessage = (type: string, message: string): boolean => {
  const pattern: RegExp = regexPatterns[type];
  const result = pattern.test(message);
  return result;
};

export default validateMessage;
