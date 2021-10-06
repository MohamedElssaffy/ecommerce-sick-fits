export const privateRoute = async ({ req }) => {
  const { user } = req.cookies;

  if (!user) {
    return {
      redirect: {
        destination: '/signin',
        permenant: false,
      },
    };
  }
  return {
    props: {},
  };
};
