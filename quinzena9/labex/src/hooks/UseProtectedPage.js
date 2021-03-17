import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { goToAdminAuth } from '../routes/Coordinator';

const UseProtectedPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(!token) {
      goToAdminAuth(history)
    }
  });
};

export default UseProtectedPage;