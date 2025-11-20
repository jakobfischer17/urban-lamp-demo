import { useState } from 'react'
import './App.css'

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [userName, setUserName] = useState('')

  const greetings = {
    en: { hello: 'Hello', label: 'English', placeholder: 'Enter your name' },
    es: { hello: 'Hola', label: 'Español', placeholder: 'Ingresa tu nombre' },
    fr: { hello: 'Bonjour', label: 'Français', placeholder: 'Entrez votre nom' },
    de: { hello: 'Guten Tag', label: 'Deutsch', placeholder: 'Geben Sie Ihren Namen ein' },
    ja: { hello: 'こんにちは', label: '日本語', placeholder: '名前を入力してください' },
    zh: { hello: '你好', label: '中文', placeholder: '请输入您的姓名' },
    it: { hello: 'Ciao', label: 'Italiano', placeholder: 'Inserisci il tuo nome' },
    pt: { hello: 'Olá', label: 'Português', placeholder: 'Digite seu nome' },
    ru: { hello: 'Привет', label: 'Русский', placeholder: 'Введите ваше имя' },
    ar: { hello: 'مرحبا', label: 'العربية', placeholder: 'أدخل اسمك' }
  }

  const currentGreeting = greetings[selectedLanguage]

  return (
    <div className="app">
      <div className="container">
        <h1>🌍 Multilingual Greeting App</h1>
        <p className="subtitle">Say hello in different languages!</p>
        
        <div className="input-section">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder={currentGreeting.placeholder}
            className="name-input"
          />
        </div>

        <div className="greeting-display">
          <h2>
            {currentGreeting.hello}
            {userName && `, ${userName}`}!
          </h2>
        </div>

        <div className="language-selector">
          <h3>Select a Language:</h3>
          <div className="language-buttons">
            {Object.entries(greetings).map(([code, { label }]) => (
              <button
                key={code}
                onClick={() => setSelectedLanguage(code)}
                className={`language-btn ${selectedLanguage === code ? 'active' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
