function AlertDialog(title, content, buttonText, buttonCallback) {
  this.title = title;
  this.content = content;
  this.buttonText = buttonText;
  this.buttonCallback = buttonCallback;
}

AlertDialog.prototype.show = function () {
  //create a backdrop and insert to dom and into backdrop insert dialog box
  var backdrop = document.createElement("div");
  backdrop.className = "dialog-backdrop";
  document.body.appendChild(backdrop);
  //create .dialog-alert and insert into backdrop
  var dialog = document.createElement("div");
  dialog.className = "dialog-alert";
  backdrop.appendChild(dialog);
  //create .dialog-alert-title and insert into dialog
  var title = document.createElement("div");
  title.className = "dialog-alert-title";
  title.innerHTML = this.title;
  dialog.appendChild(title);
  //create .dialog-alert-content and insert into dialog
  var content = document.createElement("div");
  content.className = "dialog-alert-content";
  content.innerHTML = this.content;
  dialog.appendChild(content);
  //create .dialog-alert-button and insert into dialog
  var button = document.createElement("div");
  button.className = "dialog-alert-button";
  button.innerHTML = this.button;
  dialog.appendChild(button);
  //add event listener to button
  button.addEventListener("click", () => {
    backdrop.parentNode.removeChild(backdrop);
  });
};

const openAlertDialog = () => {
  const alertDialog = new AlertDialog();
  alertDialog.show();
};
