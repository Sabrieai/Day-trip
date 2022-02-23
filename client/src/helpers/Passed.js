// function that takes in a day and returns if that day has passed/its today or not

const isPassed = (day) => {
  const today = new Date();
  const todayDay = today.getDay();

  let passed = false;

  if (day === 'Monday' && todayDay >= 1) {
    passed = true
  }
  if (day === 'Tuesday' && todayDay >= 2) {
    passed = true
  }
  if (day === 'Wednesday' && todayDay >= 3) {
    passed = true
  }
  if (day === 'Thursday' && todayDay >= 4) {
    passed = true
  }
  if (day === 'Friday' && todayDay >= 5) {
    passed = true
  }
  if (day === 'Saturday' && todayDay === 0) {
    passed = true
  }

 return passed;
}

module.exports={isPassed}