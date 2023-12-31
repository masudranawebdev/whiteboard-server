import { JwtPayload, Secret, sign, verify } from 'jsonwebtoken';

const createToken = (
  payload: object,
  secret: Secret,
  options: object
): string => {
  return sign(payload, secret, options);
};

const verifyToken = (token: string, secret: Secret): JwtPayload => {
  return verify(token, secret) as JwtPayload;
};

export const jwtHelper = {
  createToken,
  verifyToken,
};
