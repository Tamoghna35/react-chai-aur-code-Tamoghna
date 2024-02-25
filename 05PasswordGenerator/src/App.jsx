import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [allownumber, setAllownumber] = useState(false);
  const [allowCharacter, setAllowCharacter] = useState(false);

  const passwordGenerator = useCallback(() => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+";

    let pass = "";

    if (allownumber) characters += numbers;
    if (allowCharacter) characters += symbols;
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * characters.length + 1);
      pass += characters.charAt(char);
    }
    setPassword(pass);
  }, [length, allownumber, allowCharacter, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator, length, allowCharacter, allownumber]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="outline-none w-full px-3 py-2"
          placeholder="Password"
          value={password}
          readOnly
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-4">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label> length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            value={allownumber}
            onChange={(e) => setAllownumber(e.target.value)}
          />
          <label htmlFor="numberInpot">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            value={allowCharacter}
            onChange={(e) => setAllowCharacter(e.target.value)}
          />
          <label htmlFor="Characters">Symbols</label>
        </div>
      </div>
    </div>
  );
}

export default App;
