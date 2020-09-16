export const lettersOnly = (value) =>
  value && /[^a-zA-Z ]/i.test(value) ? 'Only letter characters' : undefined;

export const phoneNumber = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;
