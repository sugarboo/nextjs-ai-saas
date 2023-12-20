import { SignUp } from "@clerk/nextjs";

const AuthSignUpPage = () => {
  return (
    <SignUp afterSignInUrl="/" />
  );
}
 
export default AuthSignUpPage;
