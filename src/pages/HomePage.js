import React from "react";

const HomePage = ({ navigateTo }) => (
  <div>
    <section
      className="vh-100 d-flex align-items-center justify-content-center text-white text-center"
      style={{
        backgroundImage: `url(https://placehold.co/1920x1080/333333/FFFFFF?text=BUILD+YOUR+PROFESSIONAL+WEBSITE)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      />
      <div className="position-relative z-2 p-4">
        <h2 className="display-4 fw-bold mb-3">
          BUILD YOUR PROFESSIONAL WEBSITE
        </h2>
        <p className="lead mb-4">
          Create a unique website easily with the help of tons of features
        </p>
        <button
          onClick={() => navigateTo("portfolio")}
          className="btn btn-success btn-lg"
        >
          VIEW FEATURES
        </button>
      </div>
    </section>
    {/* Services */}
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Hello! Welcome to Hygge</h2>
        <p className="text-muted mb-5">
          <span className="fw-semibold">a multipurpose HTML5 template for</span>
          <span className="ms-2">
            <b className="text-success">creative agencies</b>,{" "}
            <b>personal blogs</b>, <b>digital studios</b>,{" "}
            <b>business owners</b>
          </span>
        </p>
        <div className="row g-4">
          {[
            { icon: "🌐", title: "Responsive Layout" },
            { icon: "🎨", title: "Color Palette" },
            { icon: "💻", title: "Clear Coding" },
            { icon: "💬", title: "Personal Support" },
            { icon: "📺", title: "Video Support" },
            { icon: "📄", title: "Documentation" },
          ].map((item, i) => (
            <div key={i} className="col-md-4">
              <div className="bg-white rounded shadow-sm p-4 h-100">
                <div className="fs-2 mb-3">{item.icon}</div>
                <h5>{item.title}</h5>
                <p className="text-muted small">
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
