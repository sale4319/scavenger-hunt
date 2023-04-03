export const crypt = (salt: string, text: string) => {
  const textToChars = (text: string) =>
    text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n: number) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  return text
    .split("")
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join("");
};

export const decrypt = (
  salt: string,
  encoded: { match: (arg0: RegExp) => string[] }
) => {
  const textToChars = (text: string) =>
    text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);
  return encoded
    .match(/.{1,2}/g)
    .map((hex: string) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode: number) => String.fromCharCode(charCode))
    .join("");
};

// encrypting
// const encrypted_text = crypt("salt", "Hello"); // -> 426f666665

// decrypting
// export const decrypted_string = decrypt("salt", "426f666665"); // -> Hello
