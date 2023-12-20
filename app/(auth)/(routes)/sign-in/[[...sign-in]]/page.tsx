import { SignIn } from "@clerk/nextjs";

const AuthSignUpPage = () => {
  return (
    <SignIn afterSignInUrl="/" />
  );
}
 
export default AuthSignUpPage;
