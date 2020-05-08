import { Auth } from 'aws-amplify';

let user;

class User {
  constructor(data, userData) {
    this.email = data.attributes.email;
    this.username = data.attributes.email;
    this.groups = data.signInUserSession.accessToken.payload['cognito:groups'] || [];
    this.language = userData.find((el) => el.Name === 'custom:language')?.Value || null;
    this.dialect = userData.find((el) => el.Name === 'custom:dialect')?.Value || null;
    this.region = userData.find((el) => el.Name === 'custom:region')?.Value || null;
  }
}

export default {
  async getUser() {
    if (!user) {
      user = await Auth.currentAuthenticatedUser({ bypassCache: false });
      if (user) {
        const userData = await Auth.userAttributes(user);
        this.setUserAttribute({ 'custom:language': 'Cree' });
        user = new User(user, userData);
      }
    }
    return user;
  },
  async setUserAttribute(attribute) {
    return Auth.updateUserAttributes(user, attribute);
  },
};
