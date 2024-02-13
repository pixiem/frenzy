import { useEffect, useState } from "react";
import deleteAccountReasons from "./constants";
import SwitchItem from "./SwitchItem";
import axios from "axios";
import toast from "react-hot-toast";
import call from "./assets/call.png";
import mail from "./assets/mail.png";
import location from "./assets/location.png";

const api = axios.create({
  baseURL: "https://frenzy-sportsarena.com/api",
});

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [selectedReason, setSelectedReason] = useState(null);
  const [reason, setReason] = useState("");
  const [showContact, setShowContact] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!phone || !password) return toast.error("Please fill all the fields");

    api
      .post("/user/login", {
        phone,
        password,
      })
      .then((res) => {
        toast.success("Logged In");
        localStorage.setItem("token", res.data.token);
        setIsAuthenticated(true);
      })
      .catch(() => toast.error("Invalid Credentials"));
  };

  const handleSubmit = () => {
    if (!selectedReason) return toast.error("Please select a reason");
    setIsLoading(true);
    api
      .post(
        "/user/remove ",
        { phone },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        toast.success("Request Submitted");
        setIsDone(true);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get("phone")) {
      setPhone(urlParams.get("phone"));
    }
    if (urlParams.get("mode") && urlParams.get("mode") === "contact") {
      setShowContact(true);
    }
  }, []);

  if (showContact) {
    return (
      <>
        <div className="min-h-screen bg-primary p-12">
          <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto">
            <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
              <div className="p-2 space-y-4 md:space-y-4 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                  <center> About Frenzy Sports Arena</center>
                </h1>
                {/* <hr style={{border:"1px solid #F3AA17"}} /> */}
                <p
                  style={{
                    borderLeft: "5px solid #F3AA17",
                    borderRight: "5px solid #F3AA17",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                  className="text-white text-justify pb-8"
                >
                  Welcome to Frenzy Sports Arena – Chittagong&apos;s hub for
                  indoor sports excitement! Our facilities cater to football and
                  cricket enthusiasts, with a refreshing swimming pool to cool
                  off post-game. But we&apos;re not just about sports; join us
                  at the BAR B Q zone for victory celebrations and flavorful
                  experiences.
                  {"\n"}
                  Stay Connect With Frenzy Sports Arena app and dive into a
                  community where passion meets play. Your sports adventure
                  begins here!
                </p>

                <div class="gallery">
                  <img
                    src="https://scontent.fcgp29-1.fna.fbcdn.net/v/t39.30808-1/326789619_3259245427669525_4386475261976035366_n.jpg?stp=dst-jpg_p160x160&_nc_cat=102&ccb=1-7&_nc_sid=596444&_nc_ohc=4jzZDMhD3I4AX9R9Tvz&_nc_ht=scontent.fcgp29-1.fna&oh=00_AfBmRNXSPt6sBeaTCI4pT302eZ0OrOWLUztuouRGJ6rIrA&oe=65CF337A"
                    alt="Two hands creating a heart and showing the sun"
                  />
                  <img
                    src="https://scontent.fcgp29-1.fna.fbcdn.net/v/t39.30808-6/426140660_362640086727944_7614332691688255372_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=z_KgOe-Zgy4AX9Lo36F&_nc_ht=scontent.fcgp29-1.fna&oh=00_AfAUUUN8dwwD33fopbrfKHwWKe2x3PISmwgo71TLC5N3YQ&oe=65CFF6A9"
                    alt="The mountain"
                  />
                  <img
                    src="https://scontent.fcgp29-1.fna.fbcdn.net/v/t39.30808-6/410055840_122109090188144947_3267598946746521550_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=xCGMMfyXvjkAX-Uu-CY&_nc_oc=AQn-RTWkMR29vir69vBA-l9Yo2-M723owUYm8eg6ODYl38x6VuZyL9DVyqLyNTJfqSQ&_nc_ht=scontent.fcgp29-1.fna&oh=00_AfAkK7BdHZVicZEVpJxZO9wygW5PYx7v_m9SFIV93eYTdg&oe=65CF47B6"
                    alt="a river"
                  />
                  <img src="https://scontent.fcgp29-1.fna.fbcdn.net/v/t39.30808-6/400217757_306669452325008_6442979643284789202_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=IQl3jW_qaroAX-DrFRV&_nc_ht=scontent.fcgp29-1.fna&oh=00_AfAauTvp-Q4S_h23ju_t2Ob9WyOWJRYY0F8tRvz4jvx4Ug&oe=65CF0C91" 
                  />
                </div>
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                  <center> Contact Us</center>
                </h1>
                <div className="text-white">
                  <div
                    className="flex items-center justify-center "
                    style={{
                      padding: "10px",
                      backgroundColor: "#F3AA17",
                      borderRadius: "10px",
                    }}
                  >
                    <img width="40px" src={mail} alt="" />{" "}
                    <a
                      style={{
                        color: "#1F2937",
                        fontSize: "18px",
                        marginLeft: "15px",
                      }}
                      href="mailto:frenzysportsctg@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:text-blue-200"
                    >
                      <b>frenzysportsctg@gmail.com</b>
                    </a>
                  </div>
                  <br />
                  <div
                    className="flex items-center justify-center "
                    style={{
                      padding: "10px",
                      backgroundColor: "#F3AA17",
                      borderRadius: "10px",
                    }}
                  >
                    <img width="40px" src={call} alt="" />{" "}
                    <a
                      style={{
                        color: "#1F2937",
                        fontSize: "18px",
                        marginLeft: "15px",
                      }}
                      href="tel:+8801881271887"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:text-blue-200"
                    >
                      <b>+8801881271887</b>
                    </a>
                  </div>
                  <br />
                  <div
                    className="flex items-center justify-center "
                    style={{
                      padding: "10px",
                      backgroundColor: "#F3AA17",
                      borderRadius: "10px",
                    }}
                  >
                    <img width="40px" src={location} alt="" />{" "}
                    <span
                      style={{
                        color: "#1F2937",
                        fontSize: "18px",
                        marginLeft: "15px",
                      }}
                      className="text-gray-300"
                    >
                      Joy Nagar Jame Masjid, Port Connecting Road, Saraipara,
                      Pahartali, Chittagong
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (isDone) {
    return (
      <div className="min-h-screen bg-primary p-12">
        <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-2 space-y-4 md:space-y-4 sm:p-8">
              <h1 className="md:text-xl text-green-300 text-justify">
                We&apos;re sorry to let you go! We&apos;ll contact you within 10
                working days through your provided phone number for further
                process. We appreciate your patience till then. Please note that
                once your profile is deleted, this action can&apos;t be undone.
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary p-12">
      {isAuthenticated ? (
        <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-2 space-y-4 md:space-y-4 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                Account and Data deletion request
              </h1>
              <hr />
              <p className="text-lg text-secondary text-center">
                Please specify a reason
              </p>
              {deleteAccountReasons.map((item) => {
                if (!showAll && item.id !== selectedReason) return;
                return (
                  <SwitchItem
                    isSelected={selectedReason === item.id}
                    data={item}
                    onClick={() => {
                      setSelectedReason(item.id);
                      setShowAll(false);
                    }}
                    key={item.id}
                  />
                );
              })}

              {selectedReason === 12 && (
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="write your reason here"
                  className="border  sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 min-h-20"
                  required=""
                />
              )}
              {!showAll && (
                <button
                  onClick={() => {
                    setSelectedReason(null);
                    setShowAll(true);
                  }}
                  className="text-gray-400 pb-2"
                >
                  Select another reason
                </button>
              )}
              <button
                type="button"
                disabled={isLoading}
                onClick={handleSubmit}
                className="disabled:bg-gray-700 w-full text-gray-800 bg-secondary hover:bg-psecondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-md px-5 py-2.5 text-center"
              >
                Submit Request
              </button>
              <p className="text-red-400 text-sm pb-2">
                Please note that by proceeding, all your data will be
                permanently deleted, and this action cannot be undone.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <section className="">
          <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto">
            <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                  Verify Yourself
                </h1>
                <form
                  onSubmit={handleLogin}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your Phone Number
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="number"
                      name="phone"
                      id="phone"
                      className="border  sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      placeholder="01XXXXXXXXX"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Password
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="border  sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-gray-800 bg-secondary hover:bg-psecondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-md px-5 py-2.5 text-center"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
