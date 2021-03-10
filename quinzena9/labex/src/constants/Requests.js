export const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ricardo-ramos-muyembe";

export const header = (token) => {
  return {
    headers: {
      auth: token
    }
  };
};