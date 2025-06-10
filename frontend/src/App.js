import React from "react";

function App() {
  const openResume = () => window.open("/resume.pdf", "_blank");
  const openLinkedIn = () =>
    window.open("https://www.linkedin.com/in/jatin-jain2106", "_blank");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Jatin Jain</h1>
        <p className="text-lg text-gray-600">
          Full-Stack, Firmware, and Vision Systems @ RIT
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={openResume}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            📄 Download Resume
          </button>
          <button
            onClick={openLinkedIn}
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-xl hover:bg-blue-50 transition"
          >
            🔗 Connect on LinkedIn
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex gap-4 mb-4">
          <button className="tab-button border-b-2 border-blue-600 text-blue-600 font-semibold pb-1">
            Current Projects
          </button>
          <button className="tab-button text-gray-500 hover:text-gray-800 pb-1">
            About Me
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Downtheline</h2>
            <p className="text-gray-600 text-sm">
              A full-stack cross-platform app to collaboratively track movies,
              books, music, and more.
            </p>
            <a
              href="https://github.com/jatinjain2106/downtheline"
              className="text-blue-600 hover:underline text-sm"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">ASL Real-Time Detector</h2>
            <p className="text-gray-600 text-sm">
              Real-time computer vision model to convert ASL signs to text using
              ResNet on-device.
            </p>
            <a
              href="https://github.com/jatinjain2106/asl-detector"
              className="text-blue-600 hover:underline text-sm"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
