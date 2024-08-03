export const sendNotification = async (fmcToken: string, message: { title: string; body: string }) => {
  const response = await fetch(
    "http://localhost:3000/send-firebase-notification",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: message.title,
        body: message.body,
        token: fmcToken,
      }),
    }
  );
  console.log(response);
  
};
