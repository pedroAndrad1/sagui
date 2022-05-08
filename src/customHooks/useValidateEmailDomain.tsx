function validateEmail(email: string) {
  const domain = email.split("@");
  console.log(domain[1]);

  if (domain[1] == "uniriotec.br" || domain[1] == "edu.unirio.br") {
    return true;
  } else {
    return false;
  }
}

export { validateEmail };
