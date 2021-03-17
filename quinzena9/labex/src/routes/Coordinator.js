export const goToHome = (history) => {
  history.push("/");
};

export const goToPublicHome = (history) => {
  history.push("/publico/home");
};

export const goToTripList = (history) => {
  history.push("/publico/lista-de-viagens");
};

export const goToTripForm = (history) => {
  history.push("/publico/seja-nosso-viajante");
};

export const goToAdminAuth = (history) => {
  history.push("/admin");
};

export const goToAdminHome = (history) => {
  history.push("/admin/home");
};

export const goToAdminCandidatures = (history) => {
  history.push("/admin/candidaturas");
};

export const goToAdminNewTrip = (history) => {
  history.push("/admin/criar-nova-viagem");
};

export const goToAdminTripList = (history) => {
  history.push("/admin/lista-de-viagens");
};