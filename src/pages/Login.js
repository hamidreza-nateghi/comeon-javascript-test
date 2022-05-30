import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import _ from 'lodash';
import { useLoginMutation } from '../features/apiSlice';
import { setPlayerItem } from '../utils';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const from = location.state?.from?.pathname || '/';

  const onSubmit = async (data) => {
    const { username, password } = data;

    try {
      const res = await login({ username, password }).unwrap();
      setPlayerItem({ ...res.player, username });
      navigate(from, { replace: true });
    } catch (error) {
      alert(error.data?.error);
    }
  };

  return (
    <div className="login">
      <div className="ui grid centered">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="fields">
            <div className="required field">
              <div className={clsx('ui icon input', errors.username && 'error')}>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  {...register('username', { required: 'Username is required' })}
                />
                <i className="user icon"></i>
              </div>
            </div>
            <div className="required field">
              <div className={clsx('ui icon input', errors.password && 'error')}>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  {...register('password', { required: 'Password is required' })}
                />
                <i className="lock icon"></i>
              </div>
            </div>
            <div className="field">
              <div className={clsx('ui icon input', isLoading && 'loading')}>
                <input type="submit" value="Login" disabled={isLoading} />
                <i className="right chevron icon"></i>
              </div>
            </div>
          </div>
          {!_.isEmpty(errors) && (
            <div class="ui error message">
              <ul className="list">
                {Object.values(errors).map((error) => (
                  <li key={error.message}>{error.message}</li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
