import { format, getSupportInfo } from 'prettier';

const formatCode = (code) => {
  try {
    return format(code, {
      parser: 'babel',
    });
  } catch (error) {
    console.error('Error while formatting code:', error);

    // Check if the error is related to Prettier's support for the input code
    const supportInfo = getSupportInfo();
    if (supportInfo.languages.findIndex((lang) => lang.name === 'babel') === -1) {
      console.error('Prettier does not support the specified parser.');
    }

    // Handle the error gracefully or return the original code
    return code;
  }
};

export default formatCode;

