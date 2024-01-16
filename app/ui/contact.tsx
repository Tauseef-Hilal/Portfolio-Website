import Button from "./buttons";

export default function ContactMe() {
  return (
    <form className="px-8 flex flex-col gap-2 w-full">
      <h2 className="text-xl font-light">Contact Me</h2>
      <textarea
        placeholder="Enter your message"
        name="message"
        id="message"
        cols={30}
        rows={10}
        className="bg-black border border-gray-700 p-2 text-sm font-light focus:border-gray-400 resize-none"
      />
      <div className="flex justify-between gap-2 items-center">
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          id="email"
          className="bg-black border border-gray-700 p-2 text-sm font-light w-full focus:border-gray-400"
        />
        <Button text="Send" />
      </div>
    </form>
  );
}
