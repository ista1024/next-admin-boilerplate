import createCache from "@emotion/cache";

const createEmotionCache = (theme?: string) => {
  const nonce = theme;
  return createCache({ key: "css", prepend: true, nonce: nonce });
};

export default createEmotionCache;
