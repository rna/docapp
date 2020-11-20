const currentTime = new Date();

const today = new Date(currentTime);
today.setHours(0, 0, 0, 0);
today.setDate(today.getDate() + 1);

const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const thirdDay = new Date(tomorrow);
thirdDay.setDate(thirdDay.getDate() + 1);

export {
  currentTime, today, tomorrow, thirdDay,
};
