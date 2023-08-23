import * as bcrypt from 'bcrypt';

// TODO[Security] Suggestion: choose more complex password hashing algorithm.
export class Hash {
  static make(plainText) {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(plainText, salt);
  }

  static compare(plainText, hash) {
    return bcrypt.compareSync(plainText, hash);
  }
}
