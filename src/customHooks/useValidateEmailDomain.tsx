function validateEmail(email: string) {
  const domain = email.split("@");

  if (domain[1] == "uniriotec.br" || domain[1] == "edu.unirio.br") {
    return true;
  } else {
    return false;
  }
}

export { validateEmail };
