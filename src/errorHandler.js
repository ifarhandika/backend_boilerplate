export const errorHandler = (res, errCode, errMessage ) => {
  return res.status(errCode).json({ status: false, message: errMessage })
}
