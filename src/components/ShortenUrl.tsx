import React, { useState } from "react";

const ShortenUrl = () => {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  const handleUrl = () => {
    if (!isValidUrl(url)) {
      alert("Please enter a valid URL");
      return;
    }
    const shortenedUrl = shorteningUrl(url);
    setShortenUrl(shortenedUrl);
  };

  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }

  function shorteningUrl(inputUrl) {
    // Use a hash of the input URL for a consistent "shortened" URL
    const hash = btoa(inputUrl).substring(0, 8); // Simple base64 encoding trimmed to 8 characters
    return `https://short.ly/${hash}`;
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
      <h3>Shorten Your URL</h3>
      <input
        type="text"
        placeholder="Enter your URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleUrl}>Shorten URL</button>
      <br />
      <br />
      {shortenUrl && (
        <div>
          <p>
            Shortened URL:{" "}
            <a href={shortenUrl} target="_blank" rel="noopener noreferrer">
              {shortenUrl}
            </a>
          </p>
          <button onClick={() => copyToClipboard(shortenUrl)}>
            Copy to Clipboard
          </button>
        </div>
      )}
      <p>{copySuccess}</p>
    </div>
  );
};

export default ShortenUrl;
