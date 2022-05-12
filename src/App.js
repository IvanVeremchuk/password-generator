import React, {useState} from 'react';
import './styles/App.css';
import InputWindow from "./components/UI/InputWindow/InputWindow";
import CreateButton from "./components/UI/CreateButton/CreateButton";
import OptionsList from "./components/OptionsList";
import background from "./styles/forestBackground.jpg";

function App() {
  const [password, setPassword] = useState("Your password will be here..");
  const [length, setLength] = useState('8');
  const [options, setOptions] = useState([
      {id: 1, title: "Include lowercase letters", mark: false},
      {id: 2, title: "Include uppercase letters", mark: false},
      {id: 3, title: "Include numbers", mark: false},
      {id: 4, title: "Include symbols", mark: false},
  ])
  const [copied, setCopied] = useState(false);

  function passwordGenerator() {
      let sourceCharacters = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          "1234567890", ",./<>?;':~`!@#$%^&*()-_=+"];
      let pass = [], source = [], i, j;
      for (i = 0; i < options.length; i++) {
          if (options[i].mark === true) {
              source.push(options[i].id);
          }
      }
      if (parseInt(length) === 0) {
          return "Error, length of password can't be null";
      }
      if (!source.length) {
          return "Error, pick at least one function";
      }
      for (j = 0; j < parseInt(length); j++) {
          let y = Math.floor(Math.random() * (source.length));
          if (source[y] === 1) {
              let x = Math.floor(Math.random() * (sourceCharacters[0].length - 1) + 1);
              pass.push(sourceCharacters[0][x]);
          }
          if (source[y] === 2) {
              let x = Math.floor(Math.random() * (sourceCharacters[1].length - 1) + 1);
              pass.push(sourceCharacters[1][x]);
          }
          if (source[y] === 3) {
              let x = Math.floor(Math.random() * (sourceCharacters[2].length - 1) + 1);
              pass.push(sourceCharacters[2][x]);
          }
          if (source[y] === 4) {
              let x = Math.floor(Math.random() * (sourceCharacters[3].length - 1) + 1);
              pass.push(sourceCharacters[3][x]);
          }
      }
      pass = pass.join('');
      return pass;
  }

  const createPassword = () => {
      let pass = passwordGenerator;
      setPassword(pass);
  }

  const markHandler = (id) => {
      setOptions([
          ...options.map(option =>
              option.id === id ? {...option, mark: !option.mark} : {...option}
          )
      ])
  }

  return (
    <div className="App">
        <div>
            <h1 className="AppTitle">Password generator</h1>
            <img className="AppBackground" src={background} alt=""/>
        </div>
        <div style={{display: "flex", justifyContent: "center", marginTop: 10}}>
            <InputWindow disabled value={password} />
        </div>
        
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20}}>
            <p className="AppText AppTextLeft">I want </p>
            <InputWindow style={{width: 30, height: 20, borderRadius: 5, marginTop: 0, padding: 0, paddingLeft: 5}} placeholder="" value={length} onChange={e => setLength(e.target.value)}/>
            <p className="AppText AppTextRight">length password</p>
        </div>
        <OptionsList options={options} markHandler={markHandler} />
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            <CreateButton onClick={createPassword}>Create password</CreateButton>
        </div>
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            <CreateButton onClick={() => {
              if (password.length > 0) {
                navigator.clipboard.writeText(password);
                setCopied(true);
                setInterval(() => {
                  setCopied(false);
                }, 5000);
              }
            }}>{copied ? 'Copied!' : 'Copy password'}</CreateButton>
        </div>
    </div>
  );
}

export default App;
