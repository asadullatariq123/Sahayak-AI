function LanguageSelector({ language, setLanguage }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        margin: "20px 30px",
      }}
    >
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "10px",
          fontSize: "16px",
          background: "#1e293b",
          color: "white",
          border: "1px solid #475569",
        }}
      >
        <option value="en">🇬🇧 English</option>
        <option value="hi">🇮🇳 हिन्दी</option>
        <option value="te">🇮🇳 తెలుగు</option>
      </select>
    </div>
  );
}

export default LanguageSelector;