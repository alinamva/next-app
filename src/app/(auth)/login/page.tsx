import { handeGithubLogin } from "@/components/lib/actions";
const LoginPage = async () => {
  return (
    <div>
      <form action={handeGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;
