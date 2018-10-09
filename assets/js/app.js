function url(){
    swal("Enter a URL:", {
        content: "input",
      })
      .then((value) => {
        location.replace(value);
      });
}
