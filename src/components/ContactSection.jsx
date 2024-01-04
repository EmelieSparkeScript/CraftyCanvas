import discord from "../assets/discord.png";
import behance from "../assets/behance.svg";
import dribble from "../assets/dribbble.png";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.png";
function ContactSection() {
  return (
    <section className="grid grid-cols-2 gap-4 mt-10 mb-56">
      <div>
        <h2 className="font-semibold leading-7 text-xl">Lets work together</h2>
        <p className="mt-6">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com This is a template Figma file, turned into code
          using Anima. Learn more at AnimaApp.com
        </p>
        <ul className="flex gap-2 mt-8">
          <li>
            <a href="discord">
              <img src={discord} alt="discord" />
            </a>
          </li>
          <li>
            <a href="facebook">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="behance">
              <img src={behance} alt="behance" />
            </a>
          </li>
          <li>
            <a href="dribble">
              <img src={dribble} alt="dribble" />
            </a>
          </li>
          <li>
            <a href="instagram">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="facebook">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-bleached-silk px-6 py-2"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full bg-bleached-silk px-6 py-2 my-4"
          />
          <input
            type="submit"
            value="Submit"
            className="inline-block bg-carbon-fiber text-white font-semibold leading-7 py-6 px-16 rounded"
          />
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
