export const SignUpAPI = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    console.log("Form submitted:", email, username, password);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_AWS_BACKEND_API_URL}/sign-up`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response;
  } catch (error) {
    console.error("There was a problem with the signUp API:", error);
    throw error;
  }
};
