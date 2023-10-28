const copyToClipboard = (textToCopy) => {
  navigator.clipboard.writeText(textToCopy).then(
    () => {
      console.log("Copied");
    },
    (err) => {
      console.error("Unable to copy text: ", err);
    }
  );
};

export default copyToClipboard;
