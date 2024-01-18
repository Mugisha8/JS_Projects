export const errorMiddleware = (error, req, res, next) => {
  console.log("error", error);
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "development" ? error.stack : null,
  });
};
