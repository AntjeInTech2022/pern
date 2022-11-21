// prerequisit: npm i passport passport-jwt
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import * as dotenv from "dotenv";
import passport from "passport";
import pool from "../dbConfig.js";
dotenv.config();

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.jwtSecret,
};

const jwtStrategy = new JwtStrategy(jwtOptions, async function (
  jwt_payload,
  done
) {
  try {
    const res = await pool.query(`SELECT * FROM users WHERE pid = $1;`, [
      jwt_payload.user,
    ]);
    // console.log("res", res);
    const user = res.rows[0];
    console.log("user", user);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
});

// const jwtStrategy = new JwtStrategy(jwtOptions, function (jwt_payload, done) {
//   pool.query(
//     `SELECT * FROM users WHERE pid = $1;`,
//     [jwt_payload.user],
//     function (err, user) {
//       if (err) {
//         return done(err, false);
//       }
//       if (user) {
//         console.log("user", user);
//         return done(null, user);
//       } else {
//         return done(null, false);
//         // or you could create a new account
//       }
//     }
//   );
// });

export const passportConfig = () => {
  passport.use(jwtStrategy);
};

export const jwtAuth = passport.authenticate("jwt", { session: false });
// export const oAuth = passport.authenticate("oauth", { session: false });
