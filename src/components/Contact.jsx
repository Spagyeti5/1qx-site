export default function Contact() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Contact</h1>
      <p className="text-gray-700 mb-6">
        Have feedback, a puzzle idea, or just want to get in touch? Use the form below:
      </p>
      <form
        className="space-y-4"
        action="https://formspree.io/f/xrbqpvrw"
        method="POST"
      >
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-semibold mb-1">Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          ></textarea>
        </div>

        {/* Honeypot field */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} />

        {/* Redirect after submit */}
        <input type="hidden" name="_next" value="https://1qx.com/ThanksPage" />

        <button
          type="submit"
          className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
