function tatkalBook() {
  return new Promise((resolve, reject) => {
    let bookingSuccess = true;
    if (bookingSuccess) resolve(200);
    else reject();
  });
}

tatkalBook()
  .then((amt) =>
    console.log(`Your ticket booked !! buddy total price is : ₹${amt}`)
  )
  .catch(() => console.log("Thanks for trying, try again later.."));

// function success(){
//   console.log("Your ticket booked !! buddy");
// }
// function failure(){
//   console.log("Thanks for trying, try again later..");
// }
