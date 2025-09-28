export default function Services() {
  return (
    <>
      <section className="min-h-[calc(100dvh-5rem)] mb-20">
        <p className="mt-5 md:w-[90%] md:text-2xl md:place-self-center-safe">
          Services
        </p>
        <h1 className="mt-10 mb-20 font-hero text-5xl md:text-7xl text-center">
          What can I do?
        </h1>
        <div className="px-[1rem] flex flex-col gap-20">
          <div className="flex flex-col md:place-content-center-safe gap-10 lg:gap-20 md:flex-row">
            <div className="place-items-center-safe">
              <img
                src={"../services-images/web-development-svcpage.png"}
                alt=""
                className="w-[300px] md:w-[400px] h-[200px] md:h-[300px]"
              />
            </div>
            <div className="md:w-[50%]">
              <span className="w-[200px] h-[5px] block bg-gray-400"></span>
              <h3 className="py-[1rem] text-3xl">Web Development</h3>
              <p>
                I create beautiful, easy-to-use websites that work well on any
                device. My focus is on making sure the site looks great and
                performs perfectly, whether you're on a phone, tablet, or
                computer. Using modern tools like HTML, CSS,
                JavaScript/TypeScript, and React.js, I build websites that are
                fast, accessible, and look exactly the way they're supposed to
                across all browsers. Ultimately, my goal is to build digital
                experiences that are not only visually appealing, but also
                intuitive and effective for users.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:place-content-center-safe gap-10 lg:gap-20 md:flex-row-reverse">
            <div className="place-items-center-safe">
              <img
                src={"../services-images/web-design-svcpage.png"}
                alt=""
                className="w-[300px] md:w-[400px] h-[200px] md:h-[300px]"
              />
            </div>
            <div className="md:w-[50%]">
              <span className="w-[200px] h-[5px] block bg-gray-400"></span>
              <h3 className="py-[1rem] text-3xl">Web Design</h3>
              <p>
                I design great websites that people love to use. My goal is to
                create a seamless experience for your visitors, making sure the
                site is easy to navigate and reflects your brand perfectly.
                Using design principles, typography, and color theory, I build
                professional and modern-looking interfaces that not only look
                good, but also help you reach your business goals. Every website
                I design is unique and tailored to your brand, and I make sure
                it looks and works great on any device, from phones to desktops.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:place-content-center-safe gap-10 lg:gap-20 md:flex-row">
            <div className="place-items-center-safe">
              <img
                src={"../services-images/responsive-design-svcpage.png"}
                alt=""
                className="w-[300px] md:w-[400px] h-[200px] md:h-[300px]"
              />
            </div>
            <div className="md:w-[50%]">
              <span className="w-[200px] h-[5px] block bg-gray-400"></span>
              <h3 className="py-[1rem] text-3xl">Responsive Design</h3>
              <p>
                I build websites that look and work perfectly on any device.
                Whether you're on a desktop, tablet, or phone, the websites I
                create adjust automatically so the user always has a great
                experience. I use flexible layouts and modern coding to make
                sure the site is easy to use, fast, and accessible to everyone.
                Ultimately, this approach not only makes the site better for
                your users, but also helps it perform well in search engines and
                keeps it ready for the next big thing in technology.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:place-content-center-safe gap-10 lg:gap-20 md:flex-row-reverse">
            <div className="place-items-center-safe">
              <img
                src={"../services-images/seo-svcpage.png"}
                alt=""
                className="w-[300px] md:w-[400px] h-[200px] md:h-[300px]"
              />
            </div>
            <div className="md:w-[50%]">
              <span className="w-[200px] h-[5px] block bg-gray-400"></span>
              <h3 className="py-[1rem] text-3xl">
                Search Engine Optimization (SEO)
              </h3>
              <p>
                I help websites get noticed online. My goal is to get your site
                to the top of search results so more people can find you. I do
                this by using a mix of strategies, from finding the right
                keywords to improving your site's technical performance.
                Ultimately, this isn't just about getting higher rankings; it's
                about helping your business grow by bringing in more visitors
                who are genuinely interested in what you offer.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:place-content-center-safe gap-10 lg:gap-20 md:flex-row">
            <div className="place-items-center-safe">
              <img
                src={"../services-images/analytics-svcpage.png"}
                alt=""
                className="w-[300px] md:w-[400px] h-[200px] md:h-[300px]"
              />
            </div>
            <div className="md:w-[50%]">
              <span className="w-[200px] h-[5px] block bg-gray-400"></span>
              <h3 className="py-[1rem] text-3xl">Analytics</h3>
              <p>
                I help you understand what's happening on your website. I set up
                tools like Google Analytics to track who's visiting your site,
                where they're coming from, and what they do once they're there.
                This helps us see what's working and what isn't, so you can make
                smart decisions that improve your website and help your business
                grow.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:place-content-center-safe gap-10 lg:gap-20 md:flex-row-reverse">
            <div className="place-items-center-safe">
              <img
                src={"../services-images/hosting-svcpage.png"}
                alt=""
                className="w-[300px] md:w-[400px] h-[200px] md:h-[300px]"
              />
            </div>
            <div className="md:w-[50%]">
              <span className="w-[200px] h-[5px] block bg-gray-400"></span>
              <h3 className="py-[1rem] text-3xl">Web Hosting</h3>
              <p>
                I handle all the technical details of keeping your website
                online. This means I set up your site with a reliable hosting
                provider and make sure it's always running smoothly. I take care
                of everything from regular backups and security checks to
                performance improvements and software updates. Essentially, I
                handle the technical side so you can focus on your business,
                knowing your website is fast, secure, and always available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
