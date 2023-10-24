const copyToClipboard = (textToCopy) => {
  navigator.clipboard.writeText(textToCopy).then(
    function () {
      alert("Text copied to clipboard");
    },
    function (err) {
      console.error("Unable to copy text: ", err);
    }
  );
};

export default copyToClipboard;
