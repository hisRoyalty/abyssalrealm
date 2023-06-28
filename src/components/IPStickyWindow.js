import React, { useState } from 'react';

const StickyWindow = ({ serverIP }) => {
  const [copied, setCopied] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded shadow">
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Server IP:</span>
        <span
          className="cursor-pointer select-all"
          onClick={copyIP}
          title={copied ? 'Copied!' : 'Click to copy'}
        >
          {serverIP}
        </span>
      </div>
    </div>
  );
};

export default StickyWindow;
