/* authSlice.ts */
/* django(api/urls.py)で作成した'loginuser/'にアクセスした時に得られる、loginしているuserのidとusernameのdataを格納するための型指定 */
export interface LOGIN_USER {
  id: number;
  username: string; // django.contrib.authの'User model'の中の'User objects'に組み込まれているもの
}
export interface FILE extends Blob {
  readonly lastModified: number;
  readonly name: string;
}
/* ProfileをGETする時
   from ProfileSerializer(django) fields */
export interface PROFILE {
  id: number;
  user_profile: number;
  img: string | null;
}
/* ProfileをPOSTする時 */
export interface POST_PROFILE {
  id: number;
  img: File | null
}
/* Credential(認証などに用いられるID、ユーザー名、暗証番号、パスワード、生体パターンなどの識別情報の総称) */
export interface CRED {
  username: string;
  password: string;
}
/* JWT authen/jwt/create でuserを作成した時に得られる返り値 */
export interface JWT {
  refresh: string;
  access: string;
}
export interface USER {
  id: number;
  username: string;
}
/* authSliceで作成するdata型 */
export interface AUTH_STATE {
  isLoginView: boolean;
  loginUser: LOGIN_USER; // 'loginuser/'
  profiles: PROFILE[];   // 'profile/'
}