import axios from "axios";

type IdentityRequestData = {
  username?: string;
  password?: string;
  password2?: string;
};

// const test_option = {
//   method: "post",
//   url: "https://sdl35bmvfb.execute-api.us-west-2.amazonaws.com/signup",
//   data: {
//     username: "sadasfasd@gmail.com",
//     password: "testPass!23",
//   },
// };

var data = JSON.stringify({
  username: "dasjfaskdk@gmail.com",
  password: "testPass!23",
});

var config = {
  method: "post",
  url: "https://sdl35bmvfb.execute-api.us-west-2.amazonaws.com/signup",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

export const signUp = async () => {
  // const { data } = await axios.post(
  //   "https://sdl35bmvfb.execute-api.us-west-2.amazonaws.com/signup",
  //   {
  //     username: identityData.username,
  //     password: identityData.password,
  //   }
  // );
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  // console.log(data.message);
};
