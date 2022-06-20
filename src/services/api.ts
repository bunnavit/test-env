import axios from 'axios';

type IdentityRequestData = {
    username?: string;
    password?: string;
    password2?: string;
  };

export const signUp = async (identityData: IdentityRequestData) => {
    const { data } = await axios.post(
        'https://sdl35bmvfb.execute-api.us-west-2.amazonaws.com/signup',
        {
          username: identityData.username,
          password: identityData.password,
        }
    );
    console.log('hi');
    console.log(data.message);
}