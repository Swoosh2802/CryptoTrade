export class User {
  public id!: string;
  public pseudo!: string;
  public email!: string;
  public blocked!: string;
  public notificationEnabled!: string;
  public oAuthCookie!: string;
  public token!: string;

  constructor(userTemp : User) {
    this.id = userTemp.id;
    this.pseudo = userTemp.pseudo;
    this.email = userTemp.email;
    this.blocked = userTemp.blocked;
    this.notificationEnabled = userTemp.notificationEnabled;
    this.oAuthCookie = userTemp.oAuthCookie;
    this.token = userTemp.token;
  }
}