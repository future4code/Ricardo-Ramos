export const aluno = "ricardo-ramos-muyembe";

export const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/" + aluno;

export const header = (token) => {
  return {
    headers: {
      auth: token
    }
  };
};