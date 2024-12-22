// try {
//   setTimeout(() => {
//     try {
//       console.log(data);
//     } catch (e) {
//       console.error(e);
//     }
//   }, 2000);
// } catch (e) {
//   console.error(e);
// } finally {
// }

// console.log("bonjour");

// window.addEventListener("error", (e) => {
//   console.log(e);
// });

// getData();

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
  }
}

class ValidationAmountError extends ValidationError {
  constructor(message) {
    super(message);
    this.message = message;
  }
}
function getTransaction() {
  const data = {
    name: "euro",
  };
  if (!data.amount) {
    const e = new ValidationError("need amount");
    throw e;
  }
  throw new Error("unexpected error");
}

function initApp() {
  try {
    getTransaction();
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log("you should retry");
    } else {
      throw error;
    }
  }
}

try {
  initApp();
} catch (error) {
  console.error(error);
}
