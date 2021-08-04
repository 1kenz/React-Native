/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
export function resolveAuthError(code) {
  switch (code) {
    case 'auth/wrong-password':
      return 'Invalid password';

    case 'auth/user-not-found':
      return 'User not found';

    case 'auth/null-value':
      return 'E-mail address and password can not be empty';

    default:
      break;
  }
}
