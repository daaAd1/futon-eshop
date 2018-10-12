import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
  const { auth } = state;
  const { isAuthentificated } = auth;

  return {
    isAuthentificated,
  };
};

export default connect(mapStateToProps)(App);
