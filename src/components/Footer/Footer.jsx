export default function Footer() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-10 mx-auto md:p-24 p-10 text-center text-white bg-slate-700 text-lg">
        <div className="Card flex-1 space-y-4 py-6">
          <h1 className="font-bold text-2xl md:text-3xl">LOCATION</h1>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>

        <div className="Card flex-1 space-y-4 py-6">
          <h1 className="font-bold text-2xl md:text-3xl">AROUND THE WEB</h1>
          <div className="space-x-2">
            <i className="fa-brands fa-facebook p-3 border-2 rounded-full"></i>
            <i className="fa-brands fa-twitter p-3 border-2 rounded-full"></i>
            <i className="fa-brands fa-linkedin-in p-3 border-2 rounded-full"></i>
            <i className="fa-solid fa-globe p-3 border-2 rounded-full"></i>
          </div>
        </div>

        <div className="Card flex-1 space-y-4 py-6">
          <h1 className="font-bold text-2xl md:text-3xl">ABOUT FREELANCER</h1>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created
            by Route
          </p>
        </div>
      </div>

      <div className="bg-slate-800 p-4 text-center">
        <p className="text-white">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
