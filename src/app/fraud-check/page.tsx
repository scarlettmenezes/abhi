const fraudScenarios = [
  {
    id: 1,
    title: "Fake Bank Call",
    scenario: "You receive a call from someone claiming to be from your bank asking for your OTP to 'verify your account security'.",
    options: ["Share the OTP", "Ask for their employee ID and call back", "Hang up immediately", "Ask them to send an email"],
    correct: 2,
    explanation: "Never share OTP with anyone over phone calls. Banks never ask for OTP over calls."
  },
  {
    id: 2,
    title: "Investment Scheme",
    scenario: "A WhatsApp message promises 50% returns in 30 days with a 'guaranteed profit' investment scheme.",
    options: ["Invest immediately", "Research the company first", "It's too good to be true - ignore", "Ask friends for advice"],
    correct: 2,
    explanation: "High return promises are usually scams. If it sounds too good to be true, it probably is."
  }
];

export default function FraudCheckPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white py-8 px-4">
      <h1 className="text-4xl font-bold text-emerald-700 mb-4">Fraud Detection Challenge</h1>
      <p className="text-gray-600 mb-8 text-center max-w-2xl">Test your ability to spot scams and protect yourself from financial fraud.</p>
      
      <div className="w-full max-w-3xl space-y-6">
        {fraudScenarios.map((scenario) => (
          <div key={scenario.id} className="bg-white rounded-xl shadow-lg p-6 border border-red-100">
            <h3 className="text-xl font-semibold text-red-600 mb-3">{scenario.title}</h3>
            <p className="text-gray-700 mb-4 bg-red-50 p-4 rounded-lg">{scenario.scenario}</p>
            
            <h4 className="font-semibold text-gray-800 mb-2">What would you do?</h4>
            <div className="space-y-2 mb-4">
              {scenario.options.map((option, idx) => (
                <button
                  key={idx}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    idx === scenario.correct 
                      ? 'border-green-300 bg-green-50 hover:bg-green-100' 
                      : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm text-green-800"><strong>Safe Choice:</strong> {scenario.options[scenario.correct]}</p>
              <p className="text-sm text-green-700 mt-1">{scenario.explanation}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-yellow-50 p-6 rounded-xl border border-yellow-200 max-w-3xl">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">🛡️ Key Safety Tips</h3>
        <ul className="text-yellow-700 space-y-1 text-sm">
          <li>• Never share OTP, PIN, or passwords with anyone</li>
          <li>• Banks never ask for sensitive information over phone/SMS</li>
          <li>• Be suspicious of high-return investment promises</li>
          <li>• Always verify caller identity through official channels</li>
          <li>• Don't click on suspicious links in messages</li>
        </ul>
      </div>
    </main>
  );
}
