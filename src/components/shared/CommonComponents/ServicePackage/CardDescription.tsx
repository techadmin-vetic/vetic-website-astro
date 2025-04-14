import React from "react";

const CardDescription: React.FC<{ description: string }> = ({
  description,
}) => {
  const renderWord = (word: string) => {
    if (word.includes("**")) {
      return <i>{word.replace("**", "")}</i>;
    } else {
      return word;
    }
  };

  return (
    <div className="card-description">
      <p className="flex flex-wrap list-disc list-inside text-gray-500 text-sm">
        {description?.split(" ")?.map((word, idx) => {
          return (
            <span className="ml-1 " key={`word:${word}:${idx}`}>
              {renderWord(word)}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default CardDescription;
