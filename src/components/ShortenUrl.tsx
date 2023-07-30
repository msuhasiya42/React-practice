import React, { useState } from "react";

const ShortenUrl = () => {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  const handleUrl = () => {
    // logic to shorten url
    setShortenUrl(shorteningURl());
  };

  function shorteningURl() {
    return "https://mayur.in/" + Math.random().toString(36).substring(2, 8);
  }

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy text");
    }
  };
  return (
    <div>
      <h3> Shorten Your URl </h3>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />{" "}
      <br /> <br />
      <button onClick={handleUrl}>Shorten Url</button> <br /> <br />
      {shortenUrl && (
        <div>
          <p>{shortenUrl}</p>
          <button onClick={() => copyToClipboard(shortenUrl)}>
            Copy to clipboard
          </button>
        </div>
      )}
      <p>{copySuccess}</p>
    </div>
  );
};

export default ShortenUrl;
