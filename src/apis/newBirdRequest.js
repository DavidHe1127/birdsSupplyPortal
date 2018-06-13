import auth from 'auth';

function* get() {
  while (true) {
    yield fetch(`${process.env.REACT_APP_NEW_BIRD_REQUEST_API}/new-bird-requests`, {
      headers: {
        Authorization: `${auth.get('idToken').jwtToken}`,
      }
    }).then(res => res.json());
  }
}

const newBirdRequest = {
  get
};

export default newBirdRequest;
