import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {

    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('is_staff');


    navigate('/');
  }, [navigate]);

  return null;
};

export default Logout;
