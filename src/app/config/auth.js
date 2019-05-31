export const isAutenticate = (res, req, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(400).json({ error: "token not provided" });
  }
  if (localStorage.getItem("token") === null) {
    
    return false;
  } else {
    return true;
  }

  next();
};
